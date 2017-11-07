<template>
  <a class="mdc-toolbar__menu-icon"
    :class="{'material-icons':!!icon}"
    @click="dispatchEvent">
    <slot>{{icon}}</slot>
  </a>
</template>

<script>
import {DispatchEventMixin} from '../util'

export default {
  name: 'mdc-toolbar-menu',
  mixins: [DispatchEventMixin],
  props: {
    icon: {type: String, 'default': "menu"}
  }
}
</script>
