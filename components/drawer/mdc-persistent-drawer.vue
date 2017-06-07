
<template>
  <aside class="mdc-persistent-drawer mdc-typography" :class="classes">
    <toolbar-spacer persistent v-if="spacer" />
    <nav ref="drawer" class="mdc-persistent-drawer__drawer">
      <slot />
    </nav>
  </aside>
</template>

<style lang="scss">
  @import "@material/drawer/persistent/mdc-persistent-drawer";
</style>

<script lang="babel">
import MDCPersistentDrawerFoundation from '@material/drawer/persistent/foundation'
import * as utils from '@material/drawer/util'

import ToolbarSpacer from './mdc-drawer-toolbar-spacer'

export default {
  name: 'mdc-persistent-drawer',
  props: {
    spacer: Boolean
  },
  components: {
    ToolbarSpacer
  },
  methods: {
    open () {
      this.foundation.open()
    },
    close () {
      this.foundation.close()
    }
  },
  data () {
    return {
      classes: {},
      changeHandlers: [],
      foundation: null
    }
  },
  mounted () {
    const {FOCUSABLE_ELEMENTS} = MDCPersistentDrawerFoundation.strings

    let vm = this
    this.foundation = new MDCPersistentDrawerFoundation({
      addClass (className) {
        vm.$set(vm.classes, className, true)
      },
      removeClass (className) {
        vm.$delete(vm.classes, className)
      },
      hasClass (className) {
        return Boolean(vm.classes[className]) || (vm.$el && vm.$el.classList.contains(className))
      },
      hasNecessaryDom () {
        return Boolean(vm.$refs.drawer)
      },
      registerInteractionHandler (evt, handler) {
        vm.$el.addEventListener(evt, handler)
      },
      deregisterInteractionHandler (evt, handler) {
        vm.$el.removeEventListener(evt, handler)
      },
      registerDrawerInteractionHandler (evt, handler) {
        vm.$refs.drawer.addEventListener(evt, handler)
      },
      deregisterDrawerInteractionHandler (evt, handler) {
        vm.$refs.drawer.removeEventListener(evt, handler)
      },
      registerTransitionEndHandler (handler) {
        vm.$refs.drawer.addEventListener('transitionend', handler)
      },
      deregisterTransitionEndHandler (handler) {
        vm.$refs.drawer.removeEventListener('transitionend', handler)
      },
      registerDocumentKeydownHandler (handler) {
        document.addEventListener('keydown', handler)
      },
      deregisterDocumentKeydownHandler (handler) {
        document.removeEventListener('keydown', handler)
      },
      getDrawerWidth () {
        return vm.$refs.drawer.clientWidth
      },
      setTranslateX (value) {
        vm.$refs.drawer.style.setProperty(
          utils.getTransformPropertyName(),
          value === null ? null : `translateX(${value}px)`
        )
      },
      getFocusableElements () {
        return vm.$refs.drawer.querySelectorAll(FOCUSABLE_ELEMENTS)
      },
      saveElementTabState (el) {
        utils.saveElementTabState(el)
      },
      restoreElementTabState (el) {
        utils.restoreElementTabState(el)
      },
      makeElementUntabbable (el) {
        el.setAttribute('tabindex', -1)
      },
      notifyOpen () {
        vm.$emit('open')
      },
      notifyClose () {
        vm.$emit('close')
      },
      isRtl () {
        /* global getComputedStyle */
        return getComputedStyle(vm.$el).getPropertyValue('direction') === 'rtl'
      },
      isDrawer (el) {
        return el === vm.$refs.drawer
      }
    })
    this.foundation.init()
  },
  beforeDestroy () {
    this.foundation.destroy()
  }
}
</script>
