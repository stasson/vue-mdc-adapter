<template>
  <custom-element :tag="tag" 
    class="mdc-theme"
    :class="classes">
    <slot />
  </custom-element>
</template>


<script>
import { CustomElement } from '../util'

export const TONE = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  BACKGROUND: 'background',
  PRIMARY_LIGHT: 'primary-light',
  SECONDARY_LIGHT: 'secondary-light',
  SECONDARY_DARK: 'secondary-dark',
  PRIMARY_DARK: 'primary-dark',
};

export const THEME = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  HINT: 'hint',
  ICON: 'icon',
  SECONDARY_LIGHT: 'disabled',
};

export default {
  name: 'mdc-theme',
  components: {
    CustomElement
  },
  props: {
    tag: {type: String, default: 'div' },

    // text style = primary, secondary, hint, icon, disable
    theme: { type: String, default: THEME.PRIMARY },
    // or tone : primary [&dark|&light], secondary[&dark|&light] , backgound,
    // or color : #FFFFFF, rgb, rgba 
    color: String,
    // bg tone = primary [&dark|&light], secondary[&dark|&light] , backgound, 
    // or color : #FFFFFF, rgb, rgba
    background: { type: String, default: TONE.PRIMARY }
  },
  computed: {
    classes () {
      let classes = {}

      // apply backgound
      if (this.background) {
        classes[`mdc-theme--${this.background}-bg`] = true
      }
      if (this.color) {
        classes[`mdc-theme--${this.color}-bg`] = true
      } else {
        classes[`mdc-theme--text-${this.theme}-on${this.background}`] = true
      }

      return classes
    }
  }
}
</script>
