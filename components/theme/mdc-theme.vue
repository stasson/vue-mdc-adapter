<template>
  <custom-element :tag="tag" 
    class="mdc-theme"
    :class="classes">
    <slot />
  </custom-element>
</template>


<script>
import { CustomElement } from '../util'


const THEME_COLORS = [
  'primary',
  'secondary',
  'background',
  'primary-light',
  'secondary-light',
  'secondary-dark',
  'primary-dark'
]

const THEME_STYLES = [
  'text-primary',
  'text-secondary',
  'text-hint',
  'text-icon',
  'text-disabled'
]

export default {
  name: 'mdc-theme',
  components: {
    CustomElement
  },
  props: {
    tag: {type: String, default: 'div' },
    color: String,
    background: String
  },
  computed: {
    classes () {
      let classes = {}

      if (this.color && THEME_COLORS.includes(this.color)) {
          classes[`mdc-theme--${this.color}`] = true
      }

      if (this.background && THEME_COLORS.includes(this.background)) {
        classes[`mdc-theme--${this.background}-bg`] = true

        if (this.color && THEME_STYLES.includes(this.color)) {
          classes[`mdc-theme--${this.color}-on-${this.background}`] = true
        }
      }
      return classes
    }
  }
}
</script>
