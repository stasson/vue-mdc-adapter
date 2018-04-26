<template>
  <div class="mdc-card" :class="{'mdc-card--outlined': outlined}">
    <slot>
    </slot>
  </div>
</template>

<script>
export default {
  name: "mdc-card",
  props: {
    outlined: Boolean
  }
};
</script>
