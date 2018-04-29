<template>
  <div class="demo-home">
    <mdc-display
      ref="title">{{ title }}</mdc-display>
    <about class="markdown" />
  </div>
</template>

<script>
export default {
  components: {
    about: () => import('../docs/about.md')
  },
  data() {
    return {
      title: 'Material Components for Vue.js'
    }
  }
}
</script>
