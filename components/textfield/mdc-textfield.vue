<template>
  <div class="mdc-textfield-wrapper" :style="{width:fullwidth?'100%':undefined}">

    <div ref="root" :class="rootClasses">

      <i ref="icon" v-if="!!hasLeadingIcon"
        tabindex="0" 
        class="mdc-text-field__icon"  
        :class="hasLeadingIcon.classes">
        <slot name="leading-icon">{{ hasLeadingIcon.content }}</slot>
      </i>

      <custom-element ref="input"
        :tag="inputTag"
        :rows="inputRows" 
        :cols="inputCols"
        :value="value" @input="updateValue($event.target.value)"
        :class="inputClasses" :required="required"
        :minlength="minlength" :maxlength="maxlength"
        :placeholder="inputPlaceHolder"
        :aria-label="inputPlaceHolder"
        :aria-controls="inputAriaControls"
      />

      <label ref="label" :class="labelClassesUpgraded" :for="_uid"  v-if="hasLabel">
        {{ label }}
      </label>

      <i ref="icon" v-if="!!hasTrailingIcon"
        tabindex="0" 
        class="mdc-text-field__icon"  
        :class="hasTrailingIcon.classes">
        <slot name="trailing-icon">{{ hasTrailingIcon.content }}</slot>
      </i>

      <div ref="outline" class="mdc-text-field__outline" v-if="hasOutline">
        <svg>
          <path class="mdc-text-field__outline-path" :d="outlinePathAttr" />
        </svg>
      </div>
      <div class="mdc-text-field__idle-outline" v-if="hasOutline"></div>
      <div ref="bottom" :class="bottomClasses" v-if="hasBottomLine"></div>

    </div>

    <p ref="help" :id="'help-'+_uid" :class="helpClasses"
      aria-hidden="true" v-if="helptext">
      {{ helptext  }}
    </p>

  </div>
</template>

<script>
import MDCTextfieldFoundation from '@material/textfield/foundation'
import MDCTextFieldBottomLineFoundation from '@material/textfield/bottom-line/foundation'
import MDCTextFieldHelperTextFoundation from '@material/textfield/helper-text/foundation'
import MDCTextFieldIconFoundation from '@material/textfield/icon/foundation';
import MDCTextFieldLabelFoundation from '@material/textfield/label/foundation';
import MDCTextFieldOutlineFoundation from '@material/textfield/outline/foundation';

import {
  emitCustomEvent, extractIconProp, 
  DispatchFocusMixin, CustomElementMixin} from '../base'
import {RippleBase} from '../ripple'

export default {
  name: 'mdc-textfield',
  mixins: [CustomElementMixin, DispatchFocusMixin],
  props: {
    value: String,
    type: {
      type: String,
      default: 'text',
      validator: function (value) {
        return ['text', 'email', 'search', 'password', 'tel', 'url']
          .indexOf(value) !== -1
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
    minlength: { type: [Number, String], default: undefined },
    maxlength: { type: [Number, String], default: undefined },
    size: { type: [Number, String], default: 20 },
    fullwidth: Boolean,
    multiline: Boolean,
    rows: { type: [Number, String], default: 8 },
    cols: { type: [Number, String], default: 40 },
    leadingIcon: [String, Array, Object],
    trailingIcon: [String, Array, Object],
  },
  data: function () {
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
        'mdc-text-field--box': this.box,
        'mdc-text-field--outlined': this.outline,
      },
      inputClasses: {
        'mdc-text-field__input': true
      },
      labelClasses: {
        'mdc-text-field__label': true
      },
      bottomClasses: {
        'mdc-text-field__bottom-line': true
      },
      helpClasses: {
        'mdc-text-field-helper-text': true,
        'mdc-text-field-helper-text--persistent': this.helptextPersistent,
        'mdc-text-field-helper-text--validation-msg': this.helptextValidation
      },
      outlinePathAttr: undefined,
    }
  },
  watch:  {
    disabled () {
      this.foundation && this.foundation.setDisabled(this.disabled)
    }
  },
  methods: {
    updateValue (value) {
      this.$emit('input', value)
    }
  },
  computed: {
    inputTag () {
      return this.multiline ? 'textarea' : 'input'
    },
    inputRows () {
      return this.multiline ? this.rows : undefined
    },
    inputCols () {
      return this.multiline ? this.cols : undefined
    },
    inputPlaceHolder () {
      return this.fullwidth ? this.label : undefined
    },
    inputAriaControls () {
      return this.help ? 'help-' + this._uid: undefined
    },
    hasLabel () {
      return this.label && !this.fullwidth
    },
    hasOutline () {
      return this.outline
    },
    hasBottomLine () {
      return !this.outline && !this.multiline
    },
    hasLeadingIcon () {
      if ((this.leadingIcon || this.$slots['leading-icon'])
         && !(this.trailingIcon || this.$slots['trailing-icon'])) {
        return this.leadingIcon ? extractIconProp(this.leadingIcon) : {}
      }
      return false
    },
    hasTrailingIcon () {
      if (this.trailingIcon || this.$slots['trailing-icon']) {
        return this.trailingIcon ? extractIconProp(this.trailingIcon) : {}
      }
      return false
    },
    labelClassesUpgraded () {
      return Object.assign(this.labelClasses, {
        'mdc-text-field__label--float-above': this.value
      })
    }
  },
  mounted () {

    if (this.$refs.bottom) {
      this.bottomLineFoundation = new MDCTextFieldBottomLineFoundation({
        addClass: (className) => {
          this.$set(this.bottomClasses, className, true)
        },
        removeClass: (className) => {
          this.$delete(this.bottomClasses, className)
        },
        setAttr: (name, value) => {
          this.$refs.bottom.setAttribute(name, value)
        },
        registerEventHandler: (evtType, handler) => {
          this.$refs.bottom.addEventListener(evtType, handler)
        },
        deregisterEventHandler: (evtType, handler) => {
          this.$refs.bottom.removeEventListener(evtType, handler)
        },
        notifyAnimationEnd: () => {
          emitCustomEvent(
            this.$refs.bottom,
            MDCTextFieldBottomLineFoundation.strings.ANIMATION_END_EVENT,
            {});
        },
      })
      this.bottomLineFoundation.init()
    }

    if (this.$refs.help) {
      this.helperTextFoundation = new MDCTextFieldHelperTextFoundation({
        addClass: (className) => {
          this.$set(this.helpClasses, className, true)
        },
        removeClass: (className) => {
          this.$delete(this.helpClasses, className)
        },
        hasClass: (className) => {
          return this.$refs.help.classList.contains(className)
        },
        setAttr: (name, value) => {
          this.$refs.help.setAttribute(name, value)
        },
        removeAttr: (name) => {
          this.$refs.help.removeAttribute(name)
        },
        setContent: ( /*content*/) => {
          // help text get's updated from {{helptext}}
          // this.$refs.help.textContent = content;
        }
      })
      this.helperTextFoundation.init()
    }

    if (this.$refs.icon) {
      if (this.hasLeadingIcon){
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
      this.labelFoundation = new MDCTextFieldLabelFoundation({
        addClass: (className) => {
          this.$set(this.labelClasses, className, true)
        },
        removeClass: (className) => {
          this.$delete(this.labelClasses, className)
        },
        getWidth: () => this.$refs.label.offsetWidth,
      })
      this.labelFoundation.init()
    }    

    if (this.$refs.outline) {
      this.outlineFoundation = new MDCTextFieldOutlineFoundation({
        getWidth: () => this.$refs.outline.offsetWidth,
        getHeight: () => this.$refs.outline.offsetHeight,
        setOutlinePathAttr: (value) => {
          this.outlinePathAttr = value
        },
      })
      this.outlineFoundation.init()
    }    

    this.foundation = new MDCTextfieldFoundation({
      addClass: (className) => {
        this.$set(this.rootClasses, className, true)
      },
      removeClass: (className) => {
        this.$delete(this.rootClasses, className)
      },
      hasClass: (className) => {
        this.$refs.root.classList.contains(className)
      },
      registerTextFieldInteractionHandler: (evtType, handler) => {
        this.$refs.root.addEventListener(evtType, handler)
      },
      deregisterTextFieldInteractionHandler: (evtType, handler) => {
        this.$refs.root.removeEventListener(evtType, handler)
      },
      registerBottomLineEventHandler: (evtType, handler) => {
        if (this.$refs.bottom) {
          this.$refs.bottom.addEventListener(evtType, handler);
        }
      },
      deregisterBottomLineEventHandler: (evtType, handler) => {
        if (this.$refs.bottom) {
          this.$refs.bottom.removeEventListener(evtType, handler);
        }
      },
      getIdleOutlineStyleValue: (propertyName) => {
        const idleOutlineElement = this.$refs.outline
        if (idleOutlineElement) {
          return window.getComputedStyle(idleOutlineElement).getPropertyValue(propertyName);
        }
      },
      isFocused: () => {
        return document.activeElement === this.$refs.input
      },
      isRtl: () => window.getComputedStyle(this.$refs.root).getPropertyValue('direction') === 'rtl',     
      registerInputInteractionHandler: (evtType, handler) => {
        this.$refs.input.addEventListener(evtType, handler)
      },
      deregisterInputInteractionHandler: (evtType, handler) => {
        this.$refs.input.removeEventListener(evtType, handler)
      },
      getNativeInput: () => {
        return this.$refs.input
      },
      
    }, {
      bottomLine: this.bottomLineFoundation,
      helperText: this.helperTextFoundation,
      icon: this.iconFoundation,
      label: this.labelFoundation,
      outline: this.outlineFoundation,
    })


    this.foundation.init()
    this.foundation.setDisabled(this.disabled)


    if (this.textbox) {
      this.ripple = new RippleBase(this)
      this.ripple.init()
    }

  },
  beforeDestroy () {
    this.foundation && this.foundation.destroy()
    this.bottomLineFoundation && this.bottomLineFoundation.destroy()
    this.helperTextFoundation && this.helperTextFoundation.destroy()
    this.iconFoundation && this.iconFoundation.destroy()
    this.labelFoundation && this.labelFoundation.destroy()
    this.outlineFoundation && this.outlineFoundation.destroy()
    this.ripple && this.ripple.destroy()
  }
}

</script>
