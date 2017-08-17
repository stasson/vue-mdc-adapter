<template>
  <component :is="useNativeSelect ? 'nativeSelectItem' : 'richSelectItem'"
    :disabled="disabled" :value=value>
    <slot></slot>
  </component>
</template>

<script lang="babel">
import { SelectMediaMixin, SelectItemMixin } from './mdc-select-mixins'
import MDCNativeSelectItem from './mdc-native-select-item'
import MDCRichSelectItem from './mdc-rich-select-item'

export default {
  mixins: [SelectMediaMixin, SelectItemMixin],
  components: {
    nativeSelectItem: MDCNativeSelectItem,
    richSelectItem: MDCRichSelectItem
  }
}
</script>
