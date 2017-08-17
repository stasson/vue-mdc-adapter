<template>
   <li class="mdc-list-item" role="option" 
    :tabindex="disabled?-1:0"
    :aria-disabled="disabled"
    :data-value="value">
     <slot></slot>
   </li>
</template>

<script lang="babel">
import { SelectItemMixin } from './mdc-select-mixins'

export default {
  mixins: [SelectItemMixin]
}
</script>
