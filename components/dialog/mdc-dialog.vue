<template>
  <aside
    ref="root"
    :class="classes"
    :style="styles"
    :aria-labelledby="'label' + vma_uid_"
    :aria-describedby="'desc' + vma_uid_"
    class="mdc-dialog"
    role="alertdialog"
  >
    <div
      ref="surface"
      :class="surfaceClasses"
      class="mdc-dialog__surface">
      <header
        v-if="title"
        class="mdc-dialog__header">
        <h2
          :id="'label' + vma_uid_"
          class="mdc-dialog__header__title">
          {{ title }}
        </h2>
      </header>
      <section
        :id="'desc' + vma_uid_"
        :class="bodyClasses"
        class="mdc-dialog__body">
        <slot />
      </section>
      <footer
        v-if="accept||cancel"
        class="mdc-dialog__footer">
        <mdcButton
          v-if="cancel"
          ref="cancel"
          :class="{'mdc-dialog__action':accent}"
          class="mdc-dialog__footer__button mdc-dialog__footer__button--cancel"
          @click="onCancel"
        >{{ cancel }}</mdcButton>
        <mdcButton
          ref="accept"
          :class="{'mdc-dialog__action':accent}"
          :disabled="acceptDisabled"
          class="mdc-dialog__footer__button mdc-dialog__footer__button--accept"
          @click="onAccept"
        >{{ accept }}</mdcButton>
      </footer>
    </div>
    <div class="mdc-dialog__backdrop"/>
  </aside>
</template>

<script>
import MDCDialogFoundation from '@material/dialog/foundation'
import { createFocusTrapInstance } from '@material/dialog/util'
import { mdcButton } from '../button'
import { VMAUniqueIdMixin } from '../base'

export default {
  name: 'mdc-dialog',
  components: {
    mdcButton: mdcButton
  },
  mixins: [VMAUniqueIdMixin],
  model: {
    prop: 'open',
    event: 'change'
  },
  props: {
    title: { type: String },
    accept: { type: String, default: 'Ok' },
    acceptDisabled: Boolean,
    cancel: { type: String },
    accent: Boolean,
    scrollable: Boolean,
    open: Boolean
  },
  data() {
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
  watch: { open: 'onOpen_' },
  mounted() {
    if (this.accept) {
      this.focusTrap = createFocusTrapInstance(
        this.$refs.surface,
        this.$refs.accept
      )
    }

    this.foundation = new MDCDialogFoundation({
      addClass: className => this.$set(this.classes, className, true),
      removeClass: className => this.$delete(this.classes, className),
      addBodyClass: className => document.body.classList.add(className),
      removeBodyClass: className => document.body.classList.remove(className),
      eventTargetHasClass: (target, className) =>
        target.classList.contains(className),
      registerInteractionHandler: (evt, handler) =>
        this.$refs.root.addEventListener(evt, handler),
      deregisterInteractionHandler: (evt, handler) =>
        this.$refs.root.removeEventListener(evt, handler),
      registerSurfaceInteractionHandler: (/*evt, handler*/) => {
        // VMA_HACK: handle button clicks ourselves
        // this.$refs.surface.addEventListener(evt, handler)
      },
      deregisterSurfaceInteractionHandler: (/*evt, handler*/) => {
        // VMA_HACK: handle button clicks ourselves
        // this.$refs.surface.removeEventListener(evt, handler)
      },
      registerDocumentKeydownHandler: handler =>
        document.addEventListener('keydown', handler),
      deregisterDocumentKeydownHandler: handler =>
        document.removeEventListener('keydown', handler),
      registerTransitionEndHandler: handler =>
        this.$refs.surface.addEventListener('transitionend', handler),
      deregisterTransitionEndHandler: handler =>
        this.$refs.surface.removeEventListener('transitionend', handler),
      notifyAccept: () => {
        this.$emit('change', false)
        this.$emit('accept')
      },
      notifyCancel: () => {
        this.$emit('change', false)
        this.$emit('cancel')
      },
      trapFocusOnSurface: () => this.focusTrap && this.focusTrap.activate(),
      untrapFocusOnSurface: () => this.focusTrap && this.focusTrap.deactivate(),
      isDialog: el => this.$refs.surface === el
    })

    this.foundation.init()
    this.open && this.foundation.open()
  },
  beforeDestroy() {
    this.foundation.destroy()
  },
  methods: {
    onOpen_(value) {
      if (value) {
        this.foundation.open()
      } else {
        this.foundation.close()
      }
    },
    onCancel() {
      this.foundation.cancel(true)
    },
    onAccept() {
      if (this.$listeners['validate']) {
        this.$emit('validate', {
          accept: (notify = true) => {
            // if notify = false, the dialog will close
            // but the notifyAccept method will not be called
            // so we need to notify listeners the open state
            // is changing.
            if (!notify) {
              this.$emit('change', false)
            }
            this.foundation.accept(notify)
          }
        })
      } else {
        this.foundation.accept(true)
      }
    },
    show() {
      this.foundation.open()
    },
    close() {
      this.foundation.close()
    }
  }
}
</script>
