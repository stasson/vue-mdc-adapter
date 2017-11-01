<template>
   <option :disabled="disabled" :value="value" v-if="hasValue">
     <slot></slot>
   </option>
   <option :disabled="disabled" v-else>
     <slot></slot>
   </option>
</template>

<script>
export default {
  name: 'mdc-native-option',
  props: {
    value: String,
    disabled: Boolean
  },
  computed: {
    hasValue () {
      return !(typeof value === 'undefined')
    }
  }
}
</script>
