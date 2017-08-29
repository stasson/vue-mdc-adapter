<template>
  <component :is="useNativeSelect ? 'nativeSelectOption' : 'richSelectOption'"
    :disabled="disabled" :value=value>
    <slot></slot>
  </component>
</template>

<script lang="babel">
import { SelectMediaMixin, SelectOptionMixin } from './mdc-select-mixins.js'
import MDCNativeSelectOption from './mdc-native-select-option.vue'
import MDCRichSelectOption from './mdc-rich-select-option.vue'

export default {
  mixins: [SelectMediaMixin, SelectOptionMixin],
  components: {
    nativeSelectOption: MDCNativeSelectOption,
    richSelectOption: MDCRichSelectOption
  }
}
</script>
