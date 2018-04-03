<template>
   <option :disabled="disabled" :value="value" v-if="hasValue"
    class="mdc-option">
     <slot></slot>
   </option>
   <option :disabled="disabled" v-else
    class="mdc-option">
     <slot></slot>
   </option>
</template>

<script>
export default {
  name: 'mdc-option',
  props: {
    value: String,
    disabled: Boolean,
  },
  computed: {
    hasValue() {
      return !(typeof this.value === 'undefined');
    },
  },
};
</script>
