<template>
  <component :is="useNativeSelect ? 'nativeSelectOption' : 'richSelectOption'"
    :disabled="disabled" :value=value>
    <slot></slot>
  </component>
</template>

<script lang="babel">
import { SelectMediaMixin, SelectOptionMixin } from './mdc-select-mixins'
import MDCNativeSelectOption from './mdc-native-select-option'
import MDCRichSelectOption from './mdc-rich-select-option'

export default {
  mixins: [SelectMediaMixin, SelectOptionMixin],
  components: {
    nativeSelectOption: MDCNativeSelectOption,
    richSelectOption: MDCRichSelectOption
  }
}
</script>
