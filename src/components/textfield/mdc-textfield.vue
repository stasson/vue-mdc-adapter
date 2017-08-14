<template>
  <div>
    <!--fullwidth multiline case-->
    <div div ref="root" :class="rootClasses" v-if="multiline && fullwidth">
      <textarea ref="input" :class="inputClasses"
        :value="value" @input="updateValue($event.target.value)"
        :rows="rows"
        :minlength="minlength" :maxlength="maxlength"
        :disabled="disabled" :aria-controls="'help-'+_uid"
        :placeholder="label"
        :aria-label="label" >
        ></textarea>
    </div>

    <!--multiline case-->
    <div div ref="root" :class="rootClasses" v-else-if="multiline">
      <textarea ref="input" :class="inputClasses"
        :value="value" @input="updateValue($event.target.value)"
        :rows="rows" :cols="cols"
        :minlength="minlength" :maxlength="maxlength"
        :disabled="disabled" :aria-controls="'help-'+_uid"
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
        :disabled="disabled" :aria-controls="'help-'+_uid"
        :placeholder="label"
        :aria-label="label" >
    </div>

    <!--default case -->
    <div ref="root" :class="rootClasses" v-else>
      <input ref="input" :class="inputClasses" :type="type" :id="_uid"
        :value="value" @input="updateValue($event.target.value)"
        :required="required" :size="size"
        :minlength="minlength" :maxlength="maxlength"
        :disabled="disabled" :aria-controls="'help-'+_uid">
      <label ref="label" :class="labelClassesUpgraded" :for="_uid"  v-if="label">
        {{ label }}
      </label>
    </div>

    <p ref="help" :id="'help-'+_uid" :class="helpClasses"
      aria-hidden="true" v-if="helptext">
      {{ helptext  }}
    </p>

  </div>
</template>

<style lang="scss">
@import "@material/textfield/mdc-textfield";
</style>


<script lang="babel">
import MDCTextfieldFoundation from '@material/textfield/foundation'

export default {
  props: {
    'value': String,
    'type': {
      type: String,
      default: 'text',
      validator: function (value) {
        return ['text', 'email', 'search', 'password', 'tel', 'url']
          .includes(value)
      }
    },
    'label': String,
    'helptext': String,
    'helptext-persistent': Boolean,
    'helptext-validation': Boolean,
    'disabled': Boolean,
    'required': Boolean,
    'minlength': { type: [Number, String], default: 0 },
    'maxlength': { type: [Number, String], default: -1 },
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
        'mdc-textfield--upgraded': true,
        'mdc-textfield--fullwidth': this.fullwidth,
        'mdc-textfield--multiline': this.multiline
      },
      inputClasses: {
        'mdc-textfield__input': true
      },
      labelClasses: {
        'mdc-textfield__label': true
      },
      helpClasses: {
        'mdc-textfield-helptext': true,
        'mdc-textfield-helptext--persistent': this.helptextPersistent,
        'mdc-textfield-helptext--validation-msg': this.helptextValidation
      }
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
        'mdc-textfield__label--float-above': this.value
      })
    }
  },
  mounted () {
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
      addClassToHelptext: (className) => {
        this.$set(this.helpClasses, className, true)
      },
      removeClassFromHelptext: (className) => {
        this.$delete(this.helpClasses, className)
      },
      helptextHasClass: (className) => {
        return this.$refs.help.classList.comtains(className)
      },
      registerInputFocusHandler: (handler) => {
        this.$refs.input.addEventListener('focus', handler)
      },
      deregisterInputFocusHandler: (handler) => {
        this.$refs.input.removeEventListener('focus', handler)
      },
      registerInputBlurHandler: (handler) => {
        this.$refs.input.addEventListener('blur', handler)
      },
      deregisterInputBlurHandler: (handler) => {
        this.$refs.input.removeEventListener('blur', handler)
      },
      registerInputInputHandler: (handler) => {
        this.$refs.input.addEventListener('input', handler)
      },
      deregisterInputInputHandler: (handler) => {
        this.$refs.input.removeEventListener('input', handler)
      },
      registerInputKeydownHandler: (handler) => {
        this.$refs.input.addEventListener('keydown', handler)
      },
      deregisterInputKeydownHandler: (handler) => {
        this.$refs.input.removeEventListener('keydown', handler)
      },
      setHelptextAttr: (name, value) => {
        if (this.$refs.help) {
          this.$refs.help.setAttribute(name, value)
        }
      },
      removeHelptextAttr: (name) => {
        if (this.$refs.help) {
          this.$refs.help.removeAttribute(name)
        }
      },
      getNativeInput: () => {
        return this.$refs.input
      }
    })
    this.foundation.init()
  },
  beforeDestroy () {
    this.foundation.destroy()
  }
}
</script>
