<template>
  <div class="mdc-textfield-wrapper">
    <!--fullwidth multiline case-->
    <div ref="root" :class="rootClasses" v-if="multiline && fullwidth">
      <textarea ref="input" :class="inputClasses"
        :value="value" @input="updateValue($event.target.value)"
        :rows="rows"
        :minlength="minlength" :maxlength="maxlength"
        :aria-controls="'help-'+_uid"
        :placeholder="label"
        :aria-label="label"
        ></textarea>
    </div>

    <!--multiline case-->
    <div ref="root" :class="rootClasses" v-else-if="multiline">
      <textarea ref="input" :class="inputClasses" :id="_uid"
        :value="value" @input="updateValue($event.target.value)"
        :rows="rows" :cols="cols"
        :minlength="minlength" :maxlength="maxlength"
        :aria-controls="'help-'+_uid"
        ></textarea>
      <label ref="label" :class="labelClassesUpgraded" :for="_uid"  v-if="label">
        {{ label }}
      </label>
    </div>

    <!--fullwidth case: no label -->
    <div ref="root" :class="rootClasses" v-else-if="fullwidth">
      <input ref="input" :class="inputClasses" :type="type"
        :value="value" @input="updateValue($event.target.value)"
        :required="required"
        :minlength="minlength" :maxlength="maxlength"
        :aria-controls="'help-'+_uid"
        :placeholder="label"
        :aria-label="label"
        >
    </div>

    <!--default case -->
    <div ref="root" :class="rootClasses" v-else>
      <input ref="input" :class="inputClasses" :type="type" :id="_uid"
        :value="value" @input="updateValue($event.target.value)"
        :required="required" :size="size"
        :minlength="minlength" :maxlength="maxlength"
        :aria-controls="'help-'+_uid"
        >
      <label ref="label" :class="labelClassesUpgraded" :for="_uid"  v-if="label">
        {{ label }}
      </label>
      <div ref="bottom" :class="bottomClasses"></div>
    </div>

    <!--help text -->
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
import {emitCustomEvent, DispatchFocusMixin} from '../base'
import {RippleBase} from '../ripple'

export default {
  name: 'mdc-textfield',
  mixins: [DispatchFocusMixin],
  props: {
    'value': String,
    'type': {
      type: String,
      default: 'text',
      validator: function (value) {
        return ['text', 'email', 'search', 'password', 'tel', 'url']
          .indexOf(value) !== -1
      }
    },
    'dense': Boolean,
    'label': String,
    'helptext': String,
    'helptext-persistent': Boolean,
    'helptext-validation': Boolean,
    'disabled': Boolean,
    'required': Boolean,
    'minlength': { type: [Number, String], default: undefined },
    'maxlength': { type: [Number, String], default: undefined },
    'size': { type: [Number, String], default: 20 },
    'fullwidth': Boolean,
    'multiline': Boolean,
    'rows': { type: [Number, String], default: 8 },
    'cols': { type: [Number, String], default: 40 }
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
        'mdc-text-field--textarea': this.multiline
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
      }
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
        setContent: (content) => {
          this.$refs.help.textContent = content;
        }
      }) 
      this.helperTextFoundation.init()
    }

    this.foundation = new MDCTextfieldFoundation({
      addClass: (className) => {
        this.$set(this.rootClasses, className, true)
      },
      removeClass: (className) => {
        this.$delete(this.rootClasses, className)
      },
      addClassToLabel: (className) => {
        this.$set(this.labelClasses, className, true)
      },
      removeClassFromLabel: (className) => {
        this.$delete(this.labelClasses, className)
      },
      setIconAttr: (/* name: string, value: string */) => {},
      eventTargetHasClass: (target, className) =>  target.classList.contains(className),
      registerTextFieldInteractionHandler: (evtType, handler) => {
        this.$refs.root.addEventListener(evtType, handler)
      },
      deregisterTextFieldInteractionHandler: (evtType, handler) => {
        this.$refs.root.removeEventListener(evtType, handler)
      },
      registerInputInteractionHandler: (evtType, handler) => {
        this.$refs.input.addEventListener(evtType, handler)
      },
      deregisterInputInteractionHandler: (evtType, handler) => {
        this.$refs.input.removeEventListener(evtType, handler)
      },
      getNativeInput: () => {
        return this.$refs.input
      },
      notifyIconAction: () => {
        this.$emit('icon')
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
    }, {
      bottomLine: this.bottomLineFoundation,
      helperText: this.helperTextFoundation
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
    this.ripple && this.ripple.destroy()
  }
}
</script>
