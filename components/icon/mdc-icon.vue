<template>
  <span class="mdc-icon material-icons" v-if="icon">
    {{ icon }}
  </span>
  <span class="mdc-icon" v-else>
    <slot />
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
