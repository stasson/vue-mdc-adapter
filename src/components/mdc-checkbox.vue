<template>
<div :class="{'mdc-form-field': label, 'mdc-form-field--align-end': label && alignEnd}">
  <div ref="checkbox" class="mdc-checkbox" :class="classes">
    <input ref="input" :id="_uid" type="checkbox"
           class="mdc-checkbox__native-control"
           @change="checkboxChanged"  />
    <div class="mdc-checkbox__background">
      <svg class="mdc-checkbox__checkmark"
           viewBox="0 0 24 24">
        <path class="mdc-checkbox__checkmark__path"
              fill="none"
              stroke="white"
              d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
      </svg>
      <div class="mdc-checkbox__mixedmark"></div>
    </div>
  </div>
  <label :for="_uid" v-if="label">{{ label }}</label>
</div>
</template>

<style lang="scss">
@import "@material/form-field/mdc-form-field";
@import "@material/checkbox/mdc-checkbox";
</style>


<script lang="babel">
import MDCCheckboxFoundation from '@material/checkbox/foundation'
import {getCorrectEventName} from '@material/animation'

export default {
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    'checked': Boolean,
    'true-value': { type: null, default () { return true } },
    'false-value': { type: null, default () { return false } },
    'label': String,
    'alignEnd': Boolean,
    'disabled': Boolean
  },
  data () {
    return {
      classes: {},
      changeHandlers: [],
      foundation: null
    }
  },
  mounted () {
    let vm = this
    this.foundation = new MDCCheckboxFoundation({
      addClass (className) {
        vm.$set(vm.classes, className, true)
      },
      removeClass (className) {
        vm.$delete(vm.classes, className)
      },
      registerAnimationEndHandler (handler) {
        vm.$refs.checkbox.addEventListener(getCorrectEventName(window, 'animationend'), handler)
      },
      deregisterAnimationEndHandler (handler) {
        vm.$refs.checkbox.removeEventListener(getCorrectEventName(window, 'animationend'), handler)
      },
      registerChangeHandler (handler) {
        vm.changeHandlers.push(handler)
      },
      deregisterChangeHandler (handler) {
        let index = vm.changeHandlers.indexOf(handler)
        if (index >= 0) {
          vm.changeHandlers.splice(index, 1)
        }
      },
      getNativeControl () {
        return vm.$refs.input
      },
      forceLayout () {
        return vm.$forceUpdate()
      },
      isAttachedToDOM () {
        Boolean(vm.$el.parentNode)
      }
    })
    this.foundation.init()
    this.setDisabled(this.disabled)
  },
  beforeDestroy () {
    this.foundation.destroy()
  },
  methods: {
    checkboxChanged (event) {
      this.changeHandlers.forEach((h) => h(event))
      this.$emit('change',
        event.target.checked ? this.trueValue : this.falseValue)
    },
    setDisabled (disabled) {
      this.foundation.setDisabled(disabled)
      this.$set(this.classes, 'mdc-checkbox--disabled', disabled)
    }
  },
  watch: {
    disabled () {
      this.setDisabled(this.disabled)
    }
  }

}
</script>

