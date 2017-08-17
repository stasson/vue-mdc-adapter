<template>
   <option :disabled=disabled :value="value" v-if="typeof value !== 'undefined'">
     <slot></slot>
   </option>
   <option :disabled=disabled v-else>
     <slot></slot>
   </option>
</template>

<script lang="babel">
import { SelectOptionMixin } from './mdc-select-mixins'

export default {
  mixins: [SelectOptionMixin]
}
</script>
