<template>
  <section>
    <div class="mdc-typography--headline6" ref="title" v-if="title" >
      <span v-for="(word, i) in title" :key="word"
        :class="(i+1 < title.length)? 'hidden-mark hidden-mark--dot' : 'hidden-mark hidden-mark--return'"
        >{{word.trim()}}&nbsp</span>
    </div>
    <article class="doc-article markdown">
      <component :is="$route.params.id" />
    </article>
  </section>
</template>

<script>
import { capitalize } from './utils';

export default {
  components: {
    'getting-started': () => import('../docs/getting-started.md'),
    theming: () => import('../docs/theming.md'),
  },
  computed: {
    title() {
      return capitalize(this.$route.params.id).split(' ');
    },
  },
  beforeRouteUpdate(to, from, next) {
    this.$nextTick(() => scrollTo(0, 0));
    next();
  },
};
</script>
