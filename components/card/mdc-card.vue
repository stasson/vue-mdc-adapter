<template>
  <div class="mdc-card" :class="{'mdc-card--stroked': stroked}">
    <slot>
    </slot>
  </div>
</template>

<script>
export default {
  name: "mdc-card",
  props: {
    stroked: Boolean
  }
};
</script>
