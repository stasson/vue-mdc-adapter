<template>
<div :class="formFieldClasses" class="mdc-radio-wrapper">
  <div ref="root" class="mdc-radio" :class="classes" :style="styles">
    <input type="radio" ref="control" :id="vma_uid_" :name="name" 
      class="mdc-radio__native-control" @change="sync">
  
    <div ref="label" class="mdc-radio__background">
      <div class="mdc-radio__outer-circle"></div>
      <div class="mdc-radio__inner-circle"></div>
    </div>
  </div>
  <label ref="label" :for="vma_uid_"><slot>{{label}}</slot></label>
</div>
</template>

<script>
import MDCRadioFoundation from '@material/radio/foundation'
import MDCFormFieldFoundation from '@material/form-field/foundation'
import {DispatchFocusMixin} from '../base'
import {RippleBase} from '../ripple'


export default {
  name: 'mdc-radio',
  mixins: [DispatchFocusMixin],
  model: {
    prop: 'picked',
    event: 'change'
  },
  props: {
    'name': {type: String, required: true},
    'value': String,
    'picked': String,
    'checked': Boolean,
    'label': String,
    'align-end': Boolean,
    'disabled': Boolean,
  },
  data () {
    return {
      classes: {},
      styles: {},
      formFieldClasses: {
        'mdc-form-field': this.label,
        'mdc-form-field--align-end': this.label && this.alignEnd
      }
    }
  },
  mounted () {
    // add foundation
    this.foundation = new MDCRadioFoundation({
      addClass: (className) => this.$set(this.classes, className, true),
      removeClass: (className) => this.$delete(this.classes, className),
      getNativeControl: () => this.$refs.control
    })

    // add ripple
    this.ripple = new RippleBase(this, {
      isUnbounded: () => true,
      isSurfaceActive: () => false,
      registerInteractionHandler: (evt, handler) => {
        this.$refs.control.addEventListener(evt, handler)
      },
      deregisterInteractionHandler: (evt, handler) => {
        this.$refs.control.removeEventListener(evt, handler)
      },
      computeBoundingRect: () => {
        return this.$refs.root.getBoundingClientRect()
      }
    })

    this.formField = new MDCFormFieldFoundation({
      registerInteractionHandler: (type, handler) => {
        this.$refs.label.addEventListener(type, handler)
      },
      deregisterInteractionHandler: (type, handler) => {
        this.$refs.label.removeEventListener(type, handler)
      },
      activateInputRipple: () => {
        this.ripple && this.ripple.activate()
      },
      deactivateInputRipple: () => {
        this.ripple && this.ripple.deactivate()
      },
    });

    this.foundation.init()
    this.ripple.init()
    this.formField.init()

    this.foundation.setValue(this.value ? this.value : this.label)
    this.foundation.setDisabled(this.disabled)
    this.foundation.setChecked(this.checked || this.picked == this.foundation.getValue())

    // refresh model
    this.checked && this.sync()
  },
  beforeDestroy () {
    this.formField.destroy()
    this.ripple.destroy()
    this.foundation.destroy()
  },
  watch: {
    disabled (value) {
      this.foundation.setDisabled(value)
    }
  },
  methods: {
    isChecked () {
      return this.foundation.isChecked()
    },
    sync () {
      this.$emit('change', this.foundation.getValue())
    }
  }
}
</script>
