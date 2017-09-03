<template>
  <aside class="mdc-persistent-drawer mdc-typography" :class="classes">
    <div class="mdc-persistent-drawer__toolbar-spacer" 
      v-if="toolbarSpacer"></div>
    <nav ref="drawer" class="mdc-persistent-drawer__drawer">
      <slot />
    </nav>
  </aside>
</template>

<script lang="babel">
import MDCPersistentDrawerFoundation from '@material/drawer/persistent/foundation'
import * as utils from '@material/drawer/util'

export default {
  name: 'mdc-persistent-drawer',
  props: {
    'toolbar-spacer': Boolean
  },
  methods: {
    open () {
      this.foundation.open()
    },
    close () {
      this.foundation.close()
    },
    toggle () {
      this.foundation.isOpen() ? this.foundation.close()
        : this.foundation.open()
    },
    isOpen () {
      this.foundation.isOpen()
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

    this.foundation = new MDCPersistentDrawerFoundation({
      addClass: (className) => {
        this.$set(this.classes, className, true)
      },
      removeClass: (className) => {
        this.$delete(this.classes, className)
      },
      hasClass: (className) => {
        return this.$el.classList.contains(className)
      },
      hasNecessaryDom: () => {
        return Boolean(this.$refs.drawer)
      },
      registerInteractionHandler: (evt, handler) => {
        this.$el.addEventListener(evt, handler)
      },
      deregisterInteractionHandler: (evt, handler) => {
        this.$el.removeEventListener(evt, handler)
      },
      registerDrawerInteractionHandler: (evt, handler) => {
        this.$refs.drawer.addEventListener(evt, handler)
      },
      deregisterDrawerInteractionHandler: (evt, handler) => {
        this.$refs.drawer.removeEventListener(evt, handler)
      },
      registerTransitionEndHandler: (handler) => {
        this.$refs.drawer.addEventListener('transitionend', handler)
      },
      deregisterTransitionEndHandler: (handler) => {
        this.$refs.drawer.removeEventListener('transitionend', handler)
      },
      registerDocumentKeydownHandler: (handler) => {
        document.addEventListener('keydown', handler)
      },
      deregisterDocumentKeydownHandler: (handler) => {
        document.removeEventListener('keydown', handler)
      },
      getDrawerWidth: () => {
        return this.$refs.drawer.clientWidth
      },
      setTranslateX: (value) => {
        this.$refs.drawer.style.setProperty(
          utils.getTransformPropertyName(),
          value === null ? null : `translateX(${value}px)`
        )
      },
      getFocusableElements: () => {
        return this.$refs.drawer.querySelectorAll(FOCUSABLE_ELEMENTS)
      },
      saveElementTabState: (el) => {
        utils.saveElementTabState(el)
      },
      restoreElementTabState: (el) => {
        utils.restoreElementTabState(el)
      },
      makeElementUntabbable: (el) => {
        el.setAttribute('tabindex', -1)
      },
      notifyOpen: () => {
        this.$emit('open')
        this.$root.$emit('mdc:layout')
      },
      notifyClose: () => {
        this.$emit('close')
        this.$root.$emit('mdc:layout')
      },
      isRtl: () => {
        /* global getComputedStyle */
        return getComputedStyle(this.$el).getPropertyValue('direction') === 'rtl'
      },
      isDrawer: (el) => {
        return el === this.$refs.drawer
      }
    })
    this.foundation.init()
  },
  beforeDestroy () {
    this.foundation.destroy()
  }
}
</script>
