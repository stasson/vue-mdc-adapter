<template>
  <div :class=formFieldClasses class="mdc-checkbox-wrapper">
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
    <div ref="label">
      <label :for="_uid" v-if="label">{{ label }}</label>
    </div>
  </div>
</template>

<script>

/* global HTMLElement */
import MDCCheckboxFoundation from '@material/checkbox/foundation'
import {getCorrectEventName} from '@material/animation'
import {DispatchFocusMixin} from '../base'
import {RippleBase} from '../ripple'

export default {
  name: 'mdc-checkbox',
  mixins: [DispatchFocusMixin],
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
    this.foundation = new MDCCheckboxFoundation({
      addClass: (className) => this.$set(this.classes, className, true),
      removeClass: (className) => this.$delete(this.classes, className),
      registerAnimationEndHandler: (handler) =>
        this.$refs.root.addEventListener(
          getCorrectEventName(window, 'animationend'), handler),
      deregisterAnimationEndHandler: (handler) =>
        this.$refs.root.removeEventListener(
          getCorrectEventName(window, 'animationend'), handler),
      registerChangeHandler: (handler) => this.$refs.control.addEventListener('change', handler),
      deregisterChangeHandler: (handler) => this.$refs.control.removeEventListener('change', handler),
      getNativeControl: () => this.$refs.control,
      forceLayout: () => this.$forceUpdate(),
      isAttachedToDOM: () => Boolean(this.$el.parentNode)
    })

    this.foundation.init()
    this.foundation.setChecked(this.checked)
    this.foundation.setDisabled(this.disabled)
    this.foundation.setIndeterminate(this.indeterminate)

    this.ripple = new RippleBase(this, {
      isUnbounded: () => true,
      isSurfaceActive: () => RippleBase.isSurfaceActive(this.$refs.control),
      registerInteractionHandler: (evt, handler) => {		
        this.$refs.root.addEventListener(evt, handler)		
        this.$refs.label.addEventListener(evt, handler)		
      },		
      deregisterInteractionHandler: (evt, handler) => {		
        this.$refs.root.removeEventListener(evt, handler)		
        this.$refs.label.removeEventListener(evt, handler)		
      },
      computeBoundingRect: () => {
        const {left, top} = this.$refs.control.getBoundingClientRect()
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
    onChange () {
      this.$emit('update:indeterminate', this.foundation.isIndeterminate())
      this.$emit('change', this.foundation.isChecked())
    }
  }
}
</script>
