<template>
  <a class="material-icons mdc-toolbar__icon"
    @click="dispatchEvent"
  >
    <slot></slot>
  </a>
</template>

<script lang="babel">
import {DispatchEventMixin} from '../util'

export default {
  name: 'mdc-toolbar-icon',
  mixins: [DispatchEventMixin]
}
</script>
