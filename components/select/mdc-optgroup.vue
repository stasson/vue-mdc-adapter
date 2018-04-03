<template>
   <optgroup :disabled="disabled" :label="label"
    class="mdc-optgroup">
     <slot></slot>
   </optgroup>
</template>

<script>
export default {
  name: 'mdc-optgroup',
  props: {
    label: String,
    disabled: Boolean,
  },
};
</script>
