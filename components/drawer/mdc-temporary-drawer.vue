<!-- thanks to petejohanson for this implementation -->
<template>
  <aside class="mdc-temporary-drawer mdc-typography" :class="classes">
    <div class="mdc-temporary-drawer__toolbar-spacer" 
      v-if="toolbarSpacer"></div>
    <nav ref="drawer" class="mdc-temporary-drawer__drawer">
      <slot/>
    </nav>
  </aside>
</template>

<script lang="babel">
import MDCTemporaryDrawerFoundation from '@material/drawer/temporary/foundation'
import * as utils from '@material/drawer/util'

export default {
  name: 'mdc-temporary-drawer',
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
    const {FOCUSABLE_ELEMENTS, OPACITY_VAR_NAME} = MDCTemporaryDrawerFoundation.strings

    this.foundation = new MDCTemporaryDrawerFoundation({
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
      updateCssVariable: (value) => {
        this.$el.style.setProperty(OPACITY_VAR_NAME, value)
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
      isRtl: () => {
        /* global getComputedStyle */
        return getComputedStyle(this.$el).getPropertyValue('direction') === 'rtl'
      }
    })
    this.foundation.init()
  },
  beforeDestroy () {
    this.foundation.destroy()
  }
}
</script>
