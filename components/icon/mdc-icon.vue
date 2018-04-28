<template>
  <span 
    :class="{'material-icons':!!icon}" 
    class="mdc-icon mdc-icon--material">
    <slot>{{ icon }}</slot>
  </span>
</template>

<script>
export default {
  name: 'mdc-icon',
  props: {
    icon: String
  }
}
</script>
