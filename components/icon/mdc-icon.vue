<template>
  <span class="mdc-icon" :class="{'material-icons':!!icon}">
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
