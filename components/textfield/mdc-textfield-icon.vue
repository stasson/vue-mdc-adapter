<template>
  <i class="material-icons mdc-text-field__icon"
    @click="foundation.handleInteraction"
    tabindex="0">{{ icon }}</i>
</template>


<script>
import MDCTextFieldIconFoundation from "@material/textfield/icon/foundation";

export default {
  name: 'mdc-texfield-icon',
  props: {
    icon: {
      type: String,
      required: true
    },
    disabled: Boolean
  },
  data () {
    return {
      foundation: null
    }
  },
  watch: {
    disabled () {
      this.foundation && this.foundation.setDisabled(this.disabled)
    }
  },
  mounted () {
    this.foundation = new MDCTextFieldIconFoundation({
      setAttr: (attr, value) => this.$el.setAttribute(attr, value),
      registerInteractionHandler: (evtType, handler) => this.$el.addEventListener(evtType, handler),
      deregisterInteractionHandler: (evtType, handler) => this.$el.removeEventListener(evtType, handler),
      notifyIconAction: () => this.$emit('MDCTextField:icon', this)
    })
  }
}
</script>

