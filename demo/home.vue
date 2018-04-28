<template>
  <div class="demo-home">
    <mdc-display 
      ref="title" 
      typo="display1">
      <span 
        v-for="(word, i) in title" 
        :key="word"
        :class="(i+1 < title.length)? 'hidden-mark hidden-mark--dot' : 'hidden-mark hidden-mark--return'"
      >{{ word.trim() }}&nbsp</span>
    </mdc-display>
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
      title: 'Material Components for Vue.js'.split(' ')
    }
  }
}
</script>
