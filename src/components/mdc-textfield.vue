<template>
<div>

  <div ref="root" :class="rootClasses" v-if="fullwidth">
    <input ref="input" :class="inputClasses" :type="type" 
      :value="value" @input="updateValue($event.target.value)"
      :required="required" 
      :minlength="minlength" :maxlength="maxlength"
      :disabled="disabled" :aria-controls="'help-'+_uid"
      :placeholder="label"
      :aria-label="label" >

  </div>
  <div ref="root" :class="rootClasses" v-else>

    <input ref="input" :class="inputClasses" :type="type" :id="_uid"
      :value="value" @input="updateValue($event.target.value)"
      :required="required" :size="size"
      :minlength="minlength" :maxlength="maxlength"
      :disabled="disabled" :aria-controls="'help-'+_uid">

    <label ref="label" :class="labelClasses" :for="_uid"  v-if="label">
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
import { MDCTextfieldFoundation } from '@material/textfield'

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
    'fullwidth': Boolean
  },
  data: function () {
    return {
      text: this.value,
      rootClasses: {
        'mdc-textfield': true,
        'mdc-textfield--upgraded': true,
        'mdc-textfield__label--float-above': this.value,
        // TODO: add support for multiline
        // 'mdc-textfield--multiline': this.multiline,
        'mdc-textfield--fullwidth': this.fullwidth
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
  mounted () {
    let vm = this
    this.foundation = new MDCTextfieldFoundation({
      addClass (className) {
        vm.$set(vm.rootClasses, className, true)
      },
      removeClass (className) {
        vm.$delete(vm.rootClasses, className)
      },
      addClassToLabel (className) {
        vm.$set(vm.labelClasses, className, true)
      },
      removeClassFromLabel (className) {
        vm.$delete(vm.labelClasses, className)
      },
      addClassToHelptext (className) {
        vm.$set(vm.helpClasses, className, true)
      },
      removeClassFromHelptext (className) {
        vm.$delete(vm.helpClasses, className)
      },
      helptextHasClass (className) {
        return Boolean(vm.helpClasses[className])
      },
      registerInputFocusHandler (handler) {
        vm.$refs.input.addEventListener('focus', handler)
      },
      deregisterInputFocusHandler (handler) {
        vm.$refs.input.removeEventListener('focus', handler)
      },
      registerInputBlurHandler (handler) {
        vm.$refs.input.addEventListener('blur', handler)
      },
      deregisterInputBlurHandler (handler) {
        vm.$refs.input.removeEventListener('blur', handler)
      },
      registerInputInputHandler (handler) {
        vm.$refs.input.addEventListener('input', handler)
      },
      deregisterInputInputHandler (handler) {
        vm.$refs.input.removeEventListener('input', handler)
      },
      registerInputKeydownHandler (handler) {
        vm.$refs.input.addEventListener('keydown', handler)
      },
      deregisterInputKeydownHandler (handler) {
        vm.$refs.input.removeEventListener('keydown', handler)
      },
      setHelptextAttr (name, value) {
        if (vm.$refs.help) {
          vm.$refs.help.setAttribute(name, value)
        }
      },
      removeHelptextAttr (name) {
        if (vm.$refs.help) {
          vm.$refs.help.removeAttribute(name)
        }
      },
      getNativeInput () {
        return vm.$refs.input
      }
    })
    this.foundation.init()
  }
}
</script>
