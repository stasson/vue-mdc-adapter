<template>
  <div
    :style="{width:fullwidth?'100%':undefined}"
    :id="id"
    class="mdc-textfield-wrapper">

    <div
      ref="root"
      :class="rootClasses">

      <i
        v-if="!!hasLeadingIcon"
        ref="icon"
        :class="hasLeadingIcon.classes"
        tabindex="0"
        class="mdc-text-field__icon">
        <slot name="leading-icon">{{ hasLeadingIcon.content }}</slot>
      </i>

      <textarea
        v-if="multiline"
        ref="input"
        v-bind="$attrs"
        :id="vma_uid_"
        :class="inputClasses"
        :minlength="minlength"
        :maxlength="maxlength"
        :placeholder="inputPlaceHolder"
        :aria-label="inputPlaceHolder"
        :aria-controls="inputAriaControls"
        :rows="rows"
        :cols="cols"
        v-on="$listeners"
        @input="updateValue($event.target.value)"
      />

      <input
        v-else
        ref="input"
        v-bind="$attrs"
        :id="vma_uid_"
        :class="inputClasses"
        :type="type"
        :minlength="minlength"
        :maxlength="maxlength"
        :placeholder="inputPlaceHolder"
        :aria-label="inputPlaceHolder"
        :aria-controls="inputAriaControls"
        v-on="$listeners"
        @input="updateValue($event.target.value)"
      >

      <label
        v-if="hasLabel"
        ref="label"
        :class="labelClassesUpgraded"
        :for="vma_uid_">
        {{ label }}
      </label>

      <i
        v-if="!!hasTrailingIcon"
        ref="icon"
        :class="hasTrailingIcon.classes"
        tabindex="0"
        class="mdc-text-field__icon">
        <slot name="trailing-icon">{{ hasTrailingIcon.content }}</slot>
      </i>

      <div
        v-if="hasOutline"
        ref="outline"
        :class="outlineClasses"
        class="mdc-notched-outline">
        <svg>
          <path
            :d="outlinePathAttr"
            class="mdc-notched-outline__path" />
        </svg>
      </div>
      <div
        v-if="hasOutline"
        ref="outlineIdle"
        class="mdc-notched-outline__idle"/>
      <div
        v-if="hasBottomLine"
        ref="bottom"
        :class="bottomClasses"
        :style="bottomStyles"/>

    </div>

    <p
      v-if="helptext"
      ref="help"
      :id="'help-'+vma_uid_"
      :class="helpClasses"
      aria-hidden="true">
      {{ helptext }}
    </p>

  </div>
</template>

<script>
import MDCTextfieldFoundation from '@material/textfield/foundation'
import MDCLineRippleFoundation from '@material/line-ripple/foundation'
import MDCTextFieldHelperTextFoundation from '@material/textfield/helper-text/foundation'
import MDCTextFieldIconFoundation from '@material/textfield/icon/foundation'
import MDCFloatingLabelFoundation from '@material/floating-label/foundation'
import MDCNotchedOutlineFoundation from '@material/notched-outline/foundation'

import {
  extractIconProp,
  DispatchFocusMixin,
  CustomElementMixin,
  VMAUniqueIdMixin
} from '../base'
import { RippleBase } from '../ripple'

export default {
  name: 'mdc-textfield',
  mixins: [CustomElementMixin, DispatchFocusMixin, VMAUniqueIdMixin],
  inheritAttrs: false,
  model: {
    prop: 'value',
    event: 'model'
  },
  props: {
    value: String,
    type: {
      type: String,
      default: 'text',
      validator: function(value) {
        return (
          [
            'text',
            'email',
            'search',
            'password',
            'tel',
            'url',
            'number'
          ].indexOf(value) !== -1
        )
      }
    },
    dense: Boolean,
    label: String,
    helptext: String,
    helptextPersistent: Boolean,
    helptextValidation: Boolean,
    box: Boolean,
    outline: Boolean,
    disabled: Boolean,
    required: Boolean,
    valid: { type: Boolean, default: undefined },
    fullwidth: Boolean,
    multiline: Boolean,
    leadingIcon: [String, Array, Object],
    trailingIcon: [String, Array, Object],
    size: { type: [Number, String], default: 20 },
    minlength: { type: [Number, String], default: undefined },
    maxlength: { type: [Number, String], default: undefined },
    rows: { type: [Number, String], default: 8 },
    cols: { type: [Number, String], default: 40 },
    id: { type: String }
  },
  data: function() {
    return {
      text: this.value,
      rootClasses: {
        'mdc-textfield': true,
        'mdc-text-field': true,
        'mdc-text-field--upgraded': true,
        'mdc-text-field--disabled': this.disabled,
        'mdc-text-field--dense': this.dense,
        'mdc-text-field--fullwidth': this.fullwidth,
        'mdc-text-field--textarea': this.multiline,
        'mdc-text-field--box': !this.fullwidth && this.box,
        'mdc-text-field--outlined': !this.fullwidth && this.outline
      },
      inputClasses: {
        'mdc-text-field__input': true
      },
      labelClasses: {
        'mdc-floating-label': true
      },
      bottomClasses: {
        'mdc-line-ripple': true
      },
      bottomStyles: {},
      helpClasses: {
        'mdc-text-field-helper-text': true,
        'mdc-text-field-helper-text--persistent': this.helptextPersistent,
        'mdc-text-field-helper-text--validation-msg': this.helptextValidation
      },
      outlineClasses: {},
      outlinePathAttr: undefined
    }
  },
  computed: {
    inputPlaceHolder() {
      return this.fullwidth ? this.label : undefined
    },
    inputAriaControls() {
      return this.help ? 'help-' + this.vma_uid_ : undefined
    },
    hasLabel() {
      return !this.fullwidth && this.label
    },
    hasOutline() {
      return !this.fullwidth && this.outline
    },
    hasBottomLine() {
      return !this.hasOutline && !this.multiline
    },
    hasLeadingIcon() {
      if (
        (this.leadingIcon || this.$slots['leading-icon']) &&
        !(this.trailingIcon || this.$slots['trailing-icon'])
      ) {
        return this.leadingIcon ? extractIconProp(this.leadingIcon) : {}
      }
      return false
    },
    hasTrailingIcon() {
      if (this.trailingIcon || this.$slots['trailing-icon']) {
        return this.trailingIcon ? extractIconProp(this.trailingIcon) : {}
      }
      return false
    },
    labelClassesUpgraded() {
      return Object.assign(this.labelClasses, {
        'mdc-floating-label--float-above': this.value
      })
    }
  },
  watch: {
    disabled() {
      this.foundation && this.foundation.setDisabled(this.disabled)
    },
    required() {
      this.$refs.input && (this.$refs.input.required = this.required)
    },
    valid() {
      if (typeof this.valid !== 'undefined') {
        this.foundation && this.foundation.setValid(this.valid)
      }
    },
    dense() {
      this.$set(this.rootClasses, 'mdc-text-field--dense', this.dense)
    },
    helptextPersistent() {
      this.helperTextFoundation &&
        this.helperTextFoundation.setPersistent(this.helptextPersistent)
    },
    helptextValidation() {
      this.helperTextFoundation &&
        this.helperTextFoundation.setValidation(this.helptextValidation)
    },
    value(value) {
      if (this.foundation) {
        if (value !== this.foundation.getValue()) {
          this.foundation.setValue(value)
        }
      }
    }
  },
  mounted() {
    if (this.$refs.bottom) {
      this.bottomLineFoundation = new MDCLineRippleFoundation({
        addClass: className => {
          this.$set(this.bottomClasses, className, true)
        },
        removeClass: className => {
          this.$delete(this.bottomClasses, className)
        },
        hasClass: className => {
          this.$refs.bottom.classList.contains(className)
        },
        setStyle: (name, value) => {
          this.$set(this.styles, name, value)
        },
        registerEventHandler: (evtType, handler) => {
          this.$refs.bottom.addEventListener(evtType, handler)
        },
        deregisterEventHandler: (evtType, handler) => {
          this.$refs.bottom.removeEventListener(evtType, handler)
        }
      })
      this.bottomLineFoundation.init()
    }

    if (this.$refs.help) {
      this.helperTextFoundation = new MDCTextFieldHelperTextFoundation({
        addClass: className => {
          this.$set(this.helpClasses, className, true)
        },
        removeClass: className => {
          this.$delete(this.helpClasses, className)
        },
        hasClass: className => {
          return this.$refs.help.classList.contains(className)
        },
        setAttr: (name, value) => {
          this.$refs.help.setAttribute(name, value)
        },
        removeAttr: name => {
          this.$refs.help.removeAttribute(name)
        },
        setContent: (/*content*/) => {
          // help text get's updated from {{helptext}}
          // this.$refs.help.textContent = content;
        }
      })
      this.helperTextFoundation.init()
    }

    if (this.$refs.icon) {
      if (this.hasLeadingIcon) {
        this.$set(this.rootClasses, 'mdc-text-field--with-leading-icon', true)
      } else if (this.hasTrailingIcon) {
        this.$set(this.rootClasses, 'mdc-text-field--with-trailing-icon', true)
      }

      this.iconFoundation = new MDCTextFieldIconFoundation({
        setAttr: (attr, value) => this.$refs.icon.setAttribute(attr, value),
        registerInteractionHandler: (evtType, handler) => {
          this.$refs.icon.addEventListener(evtType, handler)
        },
        deregisterInteractionHandler: (evtType, handler) => {
          this.$refs.icon.removeEventListener(evtType, handler)
        },
        notifyIconAction: () => this.$emit('icon-action')
      })
      this.iconFoundation.init()
    }

    if (this.$refs.label) {
      this.labelFoundation = new MDCFloatingLabelFoundation({
        addClass: className => {
          this.$set(this.labelClasses, className, true)
        },
        removeClass: className => {
          this.$delete(this.labelClasses, className)
        },
        getWidth: () => this.$refs.label.offsetWidth,
        registerInteractionHandler: (evtType, handler) => {
          this.$refs.label.addEventListener(evtType, handler)
        },
        deregisterInteractionHandler: (evtType, handler) => {
          this.$refs.label.removeEventListener(evtType, handler)
        }
      })
      this.labelFoundation.init()
    }

    if (this.$refs.outline) {
      this.outlineFoundation = new MDCNotchedOutlineFoundation({
        getWidth: () => this.$refs.outline.offsetWidth,
        getHeight: () => this.$refs.outline.offsetHeight,
        addClass: className => {
          this.$set(this.outlineClasses, className, true)
        },
        removeClass: className => {
          this.$delete(this.outlineClasses, className)
        },
        setOutlinePathAttr: value => {
          this.outlinePathAttr = value
        },
        getIdleOutlineStyleValue: propertyName => {
          const idleOutlineElement = this.$refs.outlineIdle
          if (idleOutlineElement) {
            return window
              .getComputedStyle(idleOutlineElement)
              .getPropertyValue(propertyName)
          }
        }
      })
      this.outlineFoundation.init()
    }

    this.foundation = new MDCTextfieldFoundation(
      {
        addClass: className => {
          this.$set(this.rootClasses, className, true)
        },
        removeClass: className => {
          this.$delete(this.rootClasses, className)
        },
        hasClass: className => {
          this.$refs.root.classList.contains(className)
        },
        registerTextFieldInteractionHandler: (evtType, handler) => {
          this.$refs.root.addEventListener(evtType, handler)
        },
        deregisterTextFieldInteractionHandler: (evtType, handler) => {
          this.$refs.root.removeEventListener(evtType, handler)
        },
        isFocused: () => {
          return document.activeElement === this.$refs.input
        },
        isRtl: () =>
          window
            .getComputedStyle(this.$refs.root)
            .getPropertyValue('direction') === 'rtl',
        deactivateLineRipple: () => {
          if (this.bottom) {
            this.bottom.deactivate()
          }
        },
        activateLineRipple: () => {
          if (this.bottom) {
            this.bottom.activate()
          }
        },
        setLineRippleTransformOrigin: normalizedX => {
          if (this.bottom) {
            this.bottom.setRippleCenter(normalizedX)
          }
        },
        registerInputInteractionHandler: (evtType, handler) => {
          this.$refs.input.addEventListener(evtType, handler)
        },
        deregisterInputInteractionHandler: (evtType, handler) => {
          this.$refs.input.removeEventListener(evtType, handler)
        },
        registerValidationAttributeChangeHandler: handler => {
          const observer = new MutationObserver(handler)
          const targetNode = this.$refs.input
          const config = { attributes: true }
          observer.observe(targetNode, config)
          return observer
        },
        deregisterValidationAttributeChangeHandler: observer => {
          observer.disconnect()
        },
        shakeLabel: shouldShake => {
          this.labelFoundation.shake(shouldShake)
        },
        floatLabel: shouldFloat => {
          this.labelFoundation.float(shouldFloat)
        },
        hasLabel: () => {
          return !!this.$refs.label
        },
        getLabelWidth: () => {
          return this.labelFoundation.getWidth()
        },
        getNativeInput: () => {
          return this.$refs.input
        },
        hasOutline: () => !!this.hasOutline,
        notchOutline: (notchWidth, isRtl) =>
          this.outlineFoundation.notch(notchWidth, isRtl),
        closeOutline: () => this.outlineFoundation.closeNotch()
      },
      {
        bottomLine: this.bottomLineFoundation,
        helperText: this.helperTextFoundation,
        icon: this.iconFoundation,
        label: this.labelFoundation,
        outline: this.outlineFoundation
      }
    )

    this.foundation.init()
    this.foundation.setValue(this.value)
    this.foundation.setDisabled(this.disabled)
    this.$refs.input && (this.$refs.input.required = this.required)
    if (typeof this.valid !== 'undefined') {
      this.foundation.setValid(this.valid)
    }

    if (this.textbox) {
      this.ripple = new RippleBase(this)
      this.ripple.init()
    }
  },
  beforeDestroy() {
    this.foundation && this.foundation.destroy()
    this.bottomLineFoundation && this.bottomLineFoundation.destroy()
    this.helperTextFoundation && this.helperTextFoundation.destroy()
    this.iconFoundation && this.iconFoundation.destroy()
    this.labelFoundation && this.labelFoundation.destroy()
    this.outlineFoundation && this.outlineFoundation.destroy()
    this.ripple && this.ripple.destroy()
  },
  methods: {
    updateValue(value) {
      this.$emit('model', value)
    },
    focus() {
      this.$refs.input && this.$refs.input.focus()
    },
    blur() {
      this.$refs.input && this.$refs.input.blur()
    }
  }
}
</script>
