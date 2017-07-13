<template>
  <a href="#" class="material-icons mdc-toolbar__icon--menu"
    @click="dispatchEvent"
  >
    <slot>menu</slot>
  </a>
</template>

<style lang="scss">
@import "@material/toolbar/mdc-toolbar";
</style>

<script lang="babel">
import {DispatchEventMixin} from '../util'

export default {
  name: 'mdc-toolbar-icon-menu',
  mixins: [DispatchEventMixin]
}
</script>
