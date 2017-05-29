<template>
<div :class="formFieldClasses">
  <div ref="radio" :class="radioClasses">
    <input ref="input" :class="inputClasses" type="radio" :id="_uid" :name="name"
      @change="updateValue()" :value="tag">
    <div class="mdc-radio__background">
      <div class="mdc-radio__outer-circle"></div>
      <div class="mdc-radio__inner-circle"></div>
    </div>
  </div>
  <label :for="_uid" v-if="label">{{ label }}</label>
</div>
</template>

<style lang="scss">
@import "@material/form-field/mdc-form-field";
@import "@material/radio/mdc-radio";
</style>

<script lang="babel">
import MDCRadioFoundation from '@material/radio/foundation'

export default {
  model: {
    prop: 'picked',
    event: 'change'
  },
  props: {
    'name': String,
    'value': String,
    'checked': Boolean,
    'label': String,
    'alignEnd': Boolean,
    'disabled': Boolean
  },
  data () {
    return {
      tag: this.value ? this.value : this.label,
      formFieldClasses: {
        'mdc-form-field': this.label,
        'mdc-form-field--align-end': this.label && this.alignEnd
      },
      radioClasses: {
        'mdc-radio': true
      },
      inputClasses: {
        'mdc-radio__native-control': true
      },
      foundation: null,
      ripple: null
    }
  },
  methods: {
    updateValue () {
      this.$emit('change', this.tag)
    }
  },
  mounted () {
    let vm = this
    this.foundation = new MDCRadioFoundation({
      addClass (className) {
        vm.$set(vm.radioClasses, className, true)
      },
      removeClass (className) {
        vm.$delete(vm.radioClasses, className)
      },
      getNativeControl () {
        return vm.$refs.input
      }
    })
    this.foundation.init()
    this.foundation.setDisabled(this.disabled)
    this.foundation.setChecked(this.checked)
    if (this.checked) this.updateValue()
  },
  beforeDestroy () {
    this.foundation.destroy()
  },
  watch: {
    disabled () {
      this.foundation.setDisabled(this.disabled)
    }
  }
}
</script>

