<template>
  <span class="mdc-icon mdc-icon--material" :class="{'material-icons':!!icon}">
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
