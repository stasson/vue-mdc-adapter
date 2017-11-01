<template>
<div ref="root" class="mdc-snackbar" :class="classes"
    aria-live="assertive" aria-atomic="true" :aria-hidden="hidden">
  <div class="mdc-snackbar__text">{{message}}</div>
  <div class="mdc-snackbar__action-wrapper">
    <button type="button" @click="actionClicked"
        class="mdc-snackbar__action-button"
        :aria-hidden="actionHidden">{{actionText}}</button>
  </div>
</div>
</template>

<script>
import MDCSnackbarFoundation from '@material/snackbar/foundation'
import { getCorrectEventName } from '@material/animation'

export default {
  name: 'mdc-snackbar',
  props: {
    'event': {
      type: String,
      required: false,
      default () { return 'show-snackbar' }
    },
    'event-source': {
      type: Object,
      required: false,
      default () { return this.$root }
    },
    'dismisses-on-action': {type: Boolean, default: true}
  },
  data () {
    return {
      classes: {},
      message: '',
      actionText: '',
      hidden: false,
      actionHidden: false,
      animHandlers: [],
      actionClickHandlers: []
    }
  },
  methods: {
    actionClicked (event) {
      this.actionClickHandlers.forEach((h) => h(event))
    },
    show (data) {
      this.foundation.show(data)
    }
  },
  mounted () {
    this.foundation = new MDCSnackbarFoundation({
      addClass: (className) => {
        this.$set(this.classes, className, true)
      },
      removeClass: (className) => {
        this.$delete(this.classes, className)
      },
      setAriaHidden: () => {
        this.hidden = true
      },
      unsetAriaHidden: () => {
        this.hidden = false
      },
      setActionAriaHidden: () => {
        this.actionHidden = true
      },
      unsetActionAriaHidden: () => {
        this.actionHidden = false
      },
      setMessageText: (message) => {
        this.message = message
      },
      setActionText: (actionText) => {
        this.actionText = actionText
      },
      registerActionClickHandler: (handler) => {
        this.actionClickHandlers.push(handler)
      },
      deregisterChangeHandler: (handler) => {
        let index = this.actionClickHandlers.indexOf(handler)
        if (index >= 0) {
          this.actionClickHandlers.splice(index, 1)
        }
      },
      registerTransitionEndHandler: (handler) => {
        this.$refs.root.addEventListener(getCorrectEventName(window, 'transitionend'), handler)
      },
      deregisterTransitionEndHandler: (handler) => {
        this.$refs.root.removeEventListener(getCorrectEventName(window, 'transitionend'), handler)
      }
    })
    this.foundation.init()
    if (this.event) {
      this.eventSource.$on(this.event, (data) => {
        this.foundation.show(data)
      })
    }
    this.foundation.setDismissOnAction(this.dismissesOnAction)
  },
  beforeDestroy () {
    this.foundation.destroy()
  }
}
</script>
