<template>
<div :class=formFieldClasses>
  <div ref="root" class="mdc-checkbox" 
   :class="classes" :style="styles">
    <input ref="control" :id="_uid" type="checkbox"
       class="mdc-checkbox__native-control" :value="value" 
       @change="onChange"/>
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

import {VueMDCAdapter, VueMDCRipple} from '../base'

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
      classes: {}
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
      console.log('setChecked: ' + value)
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
    let adapter = new VueMDCAdapter(vm)

    this.foundation = new MDCCheckboxFoundation({
      addClass: (className) => adapter.addClass(className),
      removeClass: (className) => adapter.removeClass(className),
      registerAnimationEndHandler: (handler) => {
        adapter.root.addEventListener(getCorrectEventName(window, 'animationend'), handler)
      },
      deregisterAnimationEndHandler: (handler) => {
        adapter.root.removeEventListener(getCorrectEventName(window, 'animationend'), handler)
      },
      getNativeControl: () => adapter.control,
      forceLayout: () => adapter.forceLayout(),
      isAttachedToDOM: () => adapter.isAttachedToDOM()
    })

    this.foundation.setChecked(this.checked)
    this.foundation.setDisabled(this.disabled)
    this.foundation.setIndeterminate(this.indeterminate)
    this.foundation.init()

    this.ripple = new VueMDCRipple(vm, {
      isUnbounded: () => true,
      isSurfaceActive: () => VueMDCRipple.isSurfaceActive(adapter.control),
      computeBoundingRect: () => {
        const {left, top} = adapter.control.getBoundingClientRect()
        const DIM = 40
        return {
          top,
          left,
          right: left + DIM,
          bottom: top + DIM,
          width: DIM,
          height: DIM
        }
      }
    })
    this.ripple.init()
  },
  beforeDestroy () {
    this.ripple.destroy()
    this.foundation.destroy()
  },
  methods: {
    onChange (event) {
      this.$emit('update:indeterminate', this.foundation.isIndeterminate())
      this.$emit('change', this.foundation.isChecked())
    }
  }
}
</script>
