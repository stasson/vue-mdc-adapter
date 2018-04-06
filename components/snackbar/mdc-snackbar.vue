<template>
<div ref="root" class="mdc-snackbar" :class="classes"
    aria-live="assertive" aria-atomic="true" :aria-hidden="hidden">
  <div class="mdc-snackbar__text">{{message}}</div>
  <div class="mdc-snackbar__action-wrapper">
    <button ref="button" type="button"
        class="mdc-snackbar__action-button"
        :aria-hidden="actionHidden">{{actionText}}</button>
  </div>
</div>
</template>

<script>
import MDCSnackbarFoundation from '@material/snackbar/foundation';
import { getCorrectEventName } from '@material/animation';

export default {
  name: 'mdc-snackbar',
  props: {
    'align-start': Boolean,
    event: {
      type: String,
      required: false,
      default() {
        return 'show-snackbar';
      },
    },
    'event-source': {
      type: Object,
      required: false,
      default() {
        return this.$root;
      },
    },
    'dismisses-on-action': { type: Boolean, default: true },
  },
  data() {
    return {
      classes: {
        'mdc-snackbar--align-start': this.alignStart,
      },
      message: '',
      actionText: '',
      hidden: false,
      actionHidden: false,
    };
  },
  methods: {
    show(data) {
      this.foundation.show(data);
    },
  },
  mounted() {
    this.foundation = new MDCSnackbarFoundation({
      addClass: className => this.$set(this.classes, className, true),
      removeClass: className => this.$delete(this.classes, className),
      setAriaHidden: () => (this.hidden = true),
      unsetAriaHidden: () => (this.hidden = false),
      setActionAriaHidden: () => (this.actionHidden = true),
      unsetActionAriaHidden: () => (this.actionHidden = false),
      setActionText: text => {
        this.actionText = text;
      },
      setMessageText: text => {
        this.message = text;
      },
      setFocus: () => this.$refs.button.focus(),
      visibilityIsHidden: () => document.hidden,
      registerCapturedBlurHandler: handler =>
        this.$refs.button.addEventListener('blur', handler, true),
      deregisterCapturedBlurHandler: handler =>
        this.$refs.button.removeEventListener('blur', handler, true),
      registerVisibilityChangeHandler: handler =>
        document.addEventListener('visibilitychange', handler),
      deregisterVisibilityChangeHandler: handler =>
        document.removeEventListener('visibilitychange', handler),
      registerCapturedInteractionHandler: (evt, handler) =>
        document.body.addEventListener(evt, handler, true),
      deregisterCapturedInteractionHandler: (evt, handler) =>
        document.body.removeEventListener(evt, handler, true),
      registerActionClickHandler: handler =>
        this.$refs.button.addEventListener('click', handler),
      deregisterActionClickHandler: handler =>
        this.$refs.button.removeEventListener('click', handler),
      registerTransitionEndHandler: handler => {
        this.$refs.root.addEventListener(
          getCorrectEventName(window, 'transitionend'),
          handler,
        );
      },
      deregisterTransitionEndHandler: handler => {
        this.$refs.root.removeEventListener(
          getCorrectEventName(window, 'transitionend'),
          handler,
        );
      },
      notifyShow: () => this.$emit('show'),
      notifyHide: () => this.$emit('hide'),
    });
    this.foundation.init();
    if (this.event) {
      this.eventSource.$on(this.event, this.show);
    }
    this.foundation.setDismissOnAction(this.dismissesOnAction);
  },
  beforeDestroy() {
    if (this.eventSource) {
      this.eventSource.$off(this.event, this.show);
    }
    this.foundation.destroy();
  },
};
</script>
