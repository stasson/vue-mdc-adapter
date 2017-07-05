<template>
  <aside class="mdc-dialog" ref="root" :class="classes" :style="styles"
    role="alertdialog"
    :aria-labelledby="'label' + _uid"
    :aria-describedby="'desc' + _uid"
  >
    <div  ref="surface" class="mdc-dialog__surface" :class="surfaceClasses">
      <header class="mdc-dialog__header">
        <h2 :id="'label' + _uid" class="mdc-dialog__header__title">
          {{ title }}
        </h2>
      </header>
      <section :id="'desc' + _uid"
        class="mdc-dialog__body" :class="bodyClasses">
        <slot />
      </section>
      <footer class="mdc-dialog__footer">
        <button ref="cancel" type="button" v-if="cancel"
          class="mdc-button mdc-dialog__footer__button mdc-dialog__footer__button--cancel">
          {{ cancel }}
        </button>
        <button  ref="accept" type="button" 
        class="mdc-button mdc-dialog__footer__button mdc-dialog__footer__button--accept">
          {{ accept }}
        </button>
      </footer>
    </div>
    <div class="mdc-dialog__backdrop"></div>
  </aside>
</template>

<style lang="scss">
  @import '@material/dialog/mdc-dialog';
</style>

<script>
import { VueMDCAdapter } from '../base'
import MDCDialogFoundation from '@material/dialog/foundation'
import { createFocusTrapInstance } from '@material/dialog/util'

export default {
  name: 'mdc-dialog',
  props: {
    'title': { type: String, required: true },
    'accept': { type: String, default: 'Ok' },
    'cancel': { type: String, default: 'Cancel' },
    'scrollable': Boolean,
    'dark': Boolean
  },
  data () {
    return {
      classes: {
        'mdc-theme--dark': this.dark
      },
      styles: {},
      surfaceClasses: {},
      bodyClasses: {
        'mdc-dialog__body--scrollable': this.scrollable
      }
    }
  },
  mounted () {
    let adapter = new VueMDCAdapter(this)

    this.focusTrap = createFocusTrapInstance(
      adapter.vm.$refs.surface, adapter.vm.$refs.accept)

    this.foundation = new MDCDialogFoundation({
      addClass: (className) => adapter.addClass(className),
      removeClass: (className) => adapter.removeClass(className),
      addBodyClass: (className) => {
        document.body.classList.add(className)
      },
      removeBodyClass: (className) => {
        document.body.classList.remove(className)
      },
      eventTargetHasClass: (target, className) => {
        return target.classList.contains(className)
      },
      registerInteractionHandler: (evt, handler) => {
        adapter.vm.$refs.root.addEventListener(evt, handler)
      },
      deregisterInteractionHandler: (evt, handler) => {
        adapter.vm.$refs.root.removeEventListener(evt, handler)
      },
      registerSurfaceInteractionHandler: (evt, handler) => {
        adapter.vm.$refs.surface.addEventListener(evt, handler)
      },
      deregisterSurfaceInteractionHandler: (evt, handler) => {
        adapter.vm.$refs.surface.removeEventListener(evt, handler)
      },
      registerDocumentKeydownHandler: (handler) => {
        document.addEventListener('keydown', handler)
      },
      deregisterDocumentKeydownHandler: (handler) => {
        document.removeEventListener('keydown', handler)
      },
      registerTransitionEndHandler: (handler) => {
        adapter.vm.$refs.surface.addEventListener('transitionend', handler)
      },
      deregisterTransitionEndHandler: (handler) => {
        adapter.vm.$refs.surface.removeEventListener('transitionend', handler)
      },
      notifyAccept: () => {
        adapter.vm.$emit('accept')
      },
      notifyCancel: () => {
        adapter.vm.$emit('cancel')
      },
      trapFocusOnSurface: () => {
        adapter.vm.focusTrap.activate()
      },
      untrapFocusOnSurface: () => {
        adapter.vm.focusTrap.deactivate()
      },
      isDialog: (el) => {
        return adapter.vm.$refs.surface === el
      }
    })

    this.foundation.init()
  },
  beforeDestroy () {
    this.foundation.destroy()
  },
  methods: {
    show () {
      this.foundation.open()
    },
    close () {
      this.foundation.close()
    }
  }
}
</script>
