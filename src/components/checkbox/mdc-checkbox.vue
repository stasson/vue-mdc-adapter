<template>
<div :class=formFieldClasses>
  <div ref="checkbox" class="mdc-checkbox" 
   :class="checkboxClasses" :style="styles">
    <input ref="input" :id="_uid" type="checkbox"
       class="mdc-checkbox__native-control"
       @change="checkboxChanged"  :value="value" />
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

/* global HTMLElement */
import MDCCheckboxFoundation from '@material/checkbox/foundation'
import {getCorrectEventName} from '@material/animation'
import MDCRippleFoundation from '@material/ripple/foundation'
import {getMatchesProperty, supportsCssVariables} from '@material/ripple/util'

export default {
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    'checked': Boolean,
    'indeterminate': Boolean,
    'disabled': Boolean,
    'label': String,
    'align-end': Boolean,
    'value': { type: String, default () { return 'on' } }
  },
  data () {
    return {
      styles: {},
      checkboxClasses: {},
      changeHandlers: []
    }
  },
  computed: {
    formFieldClasses () {
      return {
        'mdc-form-field': this.label,
        'mdc-form-field--align-end': this.label && this.alignEnd
      }
    }
  },
  watch: {
    'checked' (value) {
      this.foundation.setChecked(value)
    },
    'disabled' (value) {
      this.foundation.setDisabled(value)
    },
    'indeterminate' (value) {
      this.foundation.setIndeterminate(value)
    }
  },
  mounted () {
    let vm = this
    this.foundation = new MDCCheckboxFoundation({
      addClass (className) {
        vm.$set(vm.checkboxClasses, className, true)
      },
      removeClass (className) {
        vm.$delete(vm.checkboxClasses, className)
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
    this.foundation.setChecked(this.checked)
    this.foundation.setDisabled(this.disabled)
    this.foundation.setIndeterminate(this.indeterminate)
    this.foundation.init()

    this.ripple = new MDCRippleFoundation({
      browserSupportsCssVars: () => supportsCssVariables(window),
      isUnbounded: () => true,
      isSurfaceActive: () => vm.$refs.input[getMatchesProperty(HTMLElement.prototype)](':active'),
      isSurfaceDisabled: () => vm.disabled,
      addClass (className) {
        vm.$set(vm.checkboxClasses, className, true)
      },
      removeClass (className) {
        vm.$delete(vm.checkboxClasses, className)
      },
      registerInteractionHandler: (type, handler) => vm.$refs.input.addEventListener(type, handler),
      deregisterInteractionHandler: (type, handler) => vm.$refs.input.removeEventListener(type, handler),
      registerResizeHandler: (handler) => window.addEventListener('resize', handler),
      deregisterResizeHandler: (handler) => window.removeEventListener('resize', handler),
      updateCssVariable: (varName, value) => {
        vm.styles[varName] = value
      },
      computeBoundingRect: () => {
        const {left, top} = vm.$refs.checkbox.getBoundingClientRect()
        const DIM = 40
        return {
          top,
          left,
          right: left + DIM,
          bottom: top + DIM,
          width: DIM,
          height: DIM
        }
      },
      getWindowPageOffset: () => ({x: window.pageXOffset, y: window.pageYOffset})
    })
    this.ripple.init()
  },
  beforeDestroy () {
    this.ripple.destroy()
    this.foundation.destroy()
  },
  methods: {
    checkboxChanged (event) {
      this.changeHandlers.forEach((h) => h(event))
      this.$emit('update:indeterminate', this.foundation.isIndeterminate())
      this.$emit('change', this.foundation.isChecked())
    }
  }
}
</script>
