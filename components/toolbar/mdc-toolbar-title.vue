<template>
  <a 
    class="mdc-toolbar-title mdc-toolbar__title" 
    v-on="listeners">
    <slot/>
  </a>
</template>

<script>
import { DispatchEventMixin } from '../base'

export default {
  name: 'mdc-toolbar-title',
  mixins: [DispatchEventMixin]
}
</script>
