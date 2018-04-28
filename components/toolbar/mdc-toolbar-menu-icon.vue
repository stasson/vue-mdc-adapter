<template>
  <a 
    :class="{'material-icons':!!icon}"
    class="mdc-toolbar-menu-icon mdc-toolbar__menu-icon"
    v-on="listeners">
    <slot>{{ icon }}</slot>
  </a>
</template>

<script>
import { DispatchEventMixin } from '../base'

export default {
  name: 'mdc-toolbar-menu-icon',
  mixins: [DispatchEventMixin],
  props: {
    icon: { type: String, default: 'menu' }
  }
}
</script>
