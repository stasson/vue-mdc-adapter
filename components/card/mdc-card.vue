<template>
  <div 
    :class="{'mdc-card--stroked': stroked}" 
    class="mdc-card">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'mdc-card',
  props: {
    stroked: Boolean
  }
}
</script>
