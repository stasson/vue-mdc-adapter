<template>
  <section class="mdc-card-actions" 
          :class="classes">
    <slot>
      <mdc-card-action-button 
        v-for="item of actions"
        :key="item.action || item"
        @click="onAction(item)" 
        :disabled="disabled || item.disabled">
        {{ item.text || item.action || item }}
      </mdc-card-action-button>
    </slot>
  </section>
</template>

<script>
import MDCCardActionButton from './mdc-card-action-button.vue'

export default {
  name: 'mdc-card-actions',
  props: {
    actions: Array,
    disabled: Boolean,
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
  },
  methods: {
    onAction (item) {
      this.$emit('action', item.action || item)
    }
  }
}
</script>
