<template>
  <div>
    <mdc-display typo="display2">
      Material Components for Vue.js
    </mdc-display>
    <about class="markdown" />
    <getting-started class="markdown" />
    <theming class="markdown" />
  </div>
</template>

<script>

export default {
  components: {
    'about': () => import('../docs/about.md'),
    'getting-started': () => import('../docs/getting-started.md'),
    'theming': () => import('../docs/theming.md'),
  }
}
</script>

