<template>
  <div>
    <mdc-display typo="display2">
      Material Components for Vue.js
    </mdc-display>
    <about class="markdown" />
  </div>
</template>

<script>

export default {
  components: {
    about: () => import('../docs/about.md')
  }
}
</script>

