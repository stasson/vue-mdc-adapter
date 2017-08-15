<template>
  <a :href="href"  class="material-icons mdc-toolbar__icon"
    @click="dispatchEvent"
  >
    <slot></slot>
  </a>
</template>

<script lang="babel">
import {DispatchEventMixin} from '../util'

export default {
  name: 'mdc-toolbar-icon',
  props: {
    'href': { type: String }
  },
  mixins: [DispatchEventMixin]
}
</script>

<style lang="css">
.mdc-toolbar__icon:hover {
  cursor: pointer;
}
</style>
