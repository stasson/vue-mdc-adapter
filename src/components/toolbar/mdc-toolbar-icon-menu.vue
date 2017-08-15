<template>
  <a class="material-icons mdc-toolbar__icon--menu"
    @click="dispatchEvent"
  >
    <slot>menu</slot>
  </a>
</template>

<script lang="babel">
import {DispatchEventMixin} from '../util'

export default {
  name: 'mdc-toolbar-icon-menu',
  mixins: [DispatchEventMixin]
}
</script>

<style lang="css">
.mdc-toolbar__icon--menu:hover {
  cursor: pointer;
}
</style>
