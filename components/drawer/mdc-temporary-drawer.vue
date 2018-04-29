<template>
  <aside
    :class="classes"
    class="mdc-temporary-drawer mdc-drawer--temporary mdc-typography">
    <nav
      ref="drawer"
      class="mdc-drawer__drawer">
      <div
        v-if="toolbarSpacer"
        class="mdc-drawer__toolbar-spacer"/>
      <slot />
    </nav>
  </aside>
</template>

<script>
import MDCTemporaryDrawerFoundation from '@material/drawer/temporary/foundation'
import * as util from '@material/drawer/util'

export default {
  name: 'mdc-temporary-drawer',
  model: {
    prop: 'open',
    event: 'change'
  },
  props: {
    open: Boolean,
    'toolbar-spacer': Boolean
  },
  data() {
    return {
      classes: {}
    }
  },
  watch: {
    open: '_refresh'
  },
  mounted() {
    const {
      FOCUSABLE_ELEMENTS,
      OPACITY_VAR_NAME
    } = MDCTemporaryDrawerFoundation.strings

    this.foundation = new MDCTemporaryDrawerFoundation({
      addClass: className => {
        this.$set(this.classes, className, true)
      },
      removeClass: className => {
        this.$delete(this.classes, className)
      },
      hasClass: className => {
        return this.$el.classList.contains(className)
      },
      addBodyClass: className => document.body.classList.add(className),
      removeBodyClass: className => document.body.classList.remove(className),
      eventTargetHasClass: (target, className) =>
        target.classList.contains(className),
      hasNecessaryDom: () => {
        return !!this.$refs.drawer
      },
      registerInteractionHandler: (evt, handler) => {
        this.$el.addEventListener(
          util.remapEvent(evt),
          handler,
          util.applyPassive()
        )
      },
      deregisterInteractionHandler: (evt, handler) => {
        this.$el.removeEventListener(
          util.remapEvent(evt),
          handler,
          util.applyPassive()
        )
      },
      registerDrawerInteractionHandler: (evt, handler) => {
        this.$refs.drawer.addEventListener(
          util.remapEvent(evt),
          handler,
          util.applyPassive()
        )
      },
      deregisterDrawerInteractionHandler: (evt, handler) => {
        this.$refs.drawer.removeEventListener(
          util.remapEvent(evt),
          handler,
          util.applyPassive()
        )
      },
      registerTransitionEndHandler: handler => {
        this.$refs.drawer.addEventListener('transitionend', handler)
      },
      deregisterTransitionEndHandler: handler => {
        this.$refs.drawer.removeEventListener('transitionend', handler)
      },
      registerDocumentKeydownHandler: handler => {
        document.addEventListener('keydown', handler)
      },
      deregisterDocumentKeydownHandler: handler => {
        document.removeEventListener('keydown', handler)
      },
      getDrawerWidth: () => {
        return this.$refs.drawer.offsetWidth
      },
      setTranslateX: value => {
        this.$refs.drawer.style.setProperty(
          util.getTransformPropertyName(),
          value === null ? null : `translateX(${value}px)`
        )
      },
      updateCssVariable: value => {
        if (util.supportsCssCustomProperties()) {
          this.$el.style.setProperty(OPACITY_VAR_NAME, value)
        }
      },
      getFocusableElements: () => {
        return this.$refs.drawer.querySelectorAll(FOCUSABLE_ELEMENTS)
      },
      saveElementTabState: el => {
        util.saveElementTabState(el)
      },
      restoreElementTabState: el => {
        util.restoreElementTabState(el)
      },
      makeElementUntabbable: el => {
        el.setAttribute('tabindex', -1)
      },
      notifyOpen: () => {
        this.$emit('change', true)
        this.$emit('open')
      },
      notifyClose: () => {
        this.$emit('change', false)
        this.$emit('close')
      },
      isRtl: () => {
        /* global getComputedStyle */
        return (
          getComputedStyle(this.$el).getPropertyValue('direction') === 'rtl'
        )
      },
      isDrawer: el => el === this.$refs.drawer
    })
    this.foundation && this.foundation.init()
    this._refresh()
  },
  beforeDestroy() {
    this.foundation && this.foundation.destroy()
    this.foundation = null
  },
  methods: {
    _refresh() {
      if (this.open) {
        this.foundation && this.foundation.open()
      } else {
        this.foundation && this.foundation.close()
      }
    }
  }
}
</script>
