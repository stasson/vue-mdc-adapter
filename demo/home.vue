<template>
  <div class="demo-home">
    <div ref="title" class="mdc-typography--headline4">
      <span v-for="(word, i) in title" :key="word"
        :class="(i+1 < title.length)? 'hidden-mark hidden-mark--dot' : 'hidden-mark hidden-mark--return'"
        >{{word.trim()}}&nbsp</span>
    </div>
    <about class="markdown" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Material Components for Vue.js'.split(' '),
    };
  },
  components: {
    about: () => import('../docs/about.md'),
  },
};
</script>
