<template>
<i class="mdc-icon-toggle material-icons" 
  role="button" aria-pressed="false" 
  :class="classes" :style="styles"
  :tabindex="tabIndex"
  :data-toggle-on='toggleOnData'
  :data-toggle-off='toggleOffData'>
  {{text}}
</i>
</template>

<style lang="scss">
@import '@material/icon-toggle/mdc-icon-toggle';
</style>

<script lang="babel">
import MDCIconToggleFoundation from '@material/icon-toggle/foundation'
import {VueMDCAdapter, VueMDCRipple} from '../base'

export default {
  props: {
    'toggle-on': String,
    'toggle-off': String,
    'label-on': String,
    'label-off': String,
    'class-on': String,
    'class-off': String,
    value: Boolean,
    disabled: Boolean,
    primary: Boolean,
    accent: Boolean
  },
  data () {
    return {
      classes: {
        'mdc-icon-toggle--primary': this.primary,
        'mdc-icon-toggle--accent': this.accent
      },
      styles: {},
      tabIndex: 0,
      text: '',
      toggleOnData: JSON.stringify({
        content: this.toggleOn,
        label: this.labelOn,
        cssClass: this.classOn
      }),
      toggleOffData: JSON.stringify({
        content: this.toggleOff,
        label: this.labelOff,
        cssClass: this.classOff
      })
    }
  },
  watch: {
    'value' (value) {
      this.foundation.toggle(value)
    },
    'disabled' (disabled) {
      this.foundation.setDisabled(disabled)
    }
  },
  mounted () {
    let vm = this
    let adapter = new VueMDCAdapter(vm)
    this.foundation = new MDCIconToggleFoundation({
      addClass: (className) => adapter.addClass(className),
      removeClass: (className) => adapter.removeClass(className),
      registerInteractionHandler: (evt, handler) =>
        adapter.registerInteractionHandler(evt, handler),
      deregisterInteractionHandler: (evt, handler) =>
        adapter.deregisterInteractionHandler(evt, handler),
      setText: (text) => { vm.text = text },
      getTabIndex: () => vm.tabIndex,
      setTabIndex: (tabIndex) => { vm.tabIndex = tabIndex },
      getAttr: (name) => vm.$el.getAttribute(name),
      setAttr: (name, value) => { vm.$el.setAttribute(name, value) },
      rmAttr: (name) => { vm.$el.removeAttribute(name) },
      notifyChange: (evtData) => { vm.$emit('input', evtData.isOn) }
    })
    this.foundation.init()
    this.foundation.refreshToggleData()
    this.foundation.toggle(this.value)
    this.foundation.setDisabled(this.disabled)

    this.ripple = new VueMDCRipple(vm, {
      isUnbounded: () => true,
      isSurfaceActive: () => vm.foundation.isKeyboardActivated(),
      computeBoundingRect: () => {
        const dim = 48
        const {left, top} = vm.$el.getBoundingClientRect()
        return {
          left,
          top,
          width: dim,
          height: dim,
          right: left + dim,
          bottom: left + dim
        }
      }
    })
    this.ripple.init()
  },
  beforeDestroy () {
    this.foundation.destroy()
    this.ripple.destroy()
  }
}

</script>
