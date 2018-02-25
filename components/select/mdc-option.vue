<template>
  <component :is="type" :disabled="disabled" :value=value>
    <slot></slot>
  </component>
</template>

<script>
import MDCNativeOption from './mdc-native-option.vue'
import MDCMenuOption from './mdc-menu-option.vue'
import MDCMultiOption from './mdc-multi-option.vue'

export default {
  name: 'mdc-option',
  props: {
    value: String,
    disabled: Boolean
  },
  inject: ['mdcSelect'],
  components: {
    'mdc-native-option': MDCNativeOption,
    'mdc-multi-option': MDCMultiOption,
    'mdc-menu-option': MDCMenuOption
  },
  computed: {
    isNative () {
      return this.mdcSelect.isNative
    },
    multiple () {
      return this.mdcSelect.multiple
    },
    type () {
      return this.multiple ? 'mdc-multi-option'
        : this.isNative ? 'mdc-native-option'
          : 'mdc-menu-option'
    }
  }
}
</script>
