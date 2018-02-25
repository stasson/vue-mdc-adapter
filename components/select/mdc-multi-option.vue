<template>
   <option class="mdc-option mdc-multi-option mdc-list-item" 
    :disabled="disabled" :value="value" v-if="hasValue">
     <slot></slot>
   </option>
   <option class="mdc-option mdc-multi-option mdc-list-item" 
    :disabled="disabled" v-else>
     <slot></slot>
   </option>
</template>

<script>
export default {
  name: 'mdc-multi-option',
  props: {
    value: String,
    disabled: Boolean
  },
  computed: {
    hasValue () {
      return !(typeof this.value === 'undefined')
    }
  }
}
</script>
