<template>
  <section class="mdc-card-actions" 
          :class="classes">
    <slot>
    </slot>
  </section>
</template>

<script>
import MDCCardActionButton from './mdc-card-action-button.vue'

export default {
  name: 'mdc-card-actions',
  props: {
    vertical: Boolean
  },
  components: {
    'mdc-card-action-button': MDCCardActionButton
  },
  data () {
    return {
      classes: {
        'mdc-card__actions': true,
        'mdc-card__actions--vertical': this.vertical
      }
    }
  }
}
</script>
