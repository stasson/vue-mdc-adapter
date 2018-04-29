<template>
  <section>
    <mdc-display
      v-if="title"
      ref="title" >{{ title }}</mdc-display>
    <article class="doc-article markdown">
      <component :is="$route.params.id" />
    </article>
  </section>
</template>

<script>
import { capitalize } from './utils'

export default {
  components: {
    'getting-started': () => import('../docs/getting-started.md'),
    theming: () => import('../docs/theming.md')
  },
  computed: {
    title() {
      return capitalize(this.$route.params.id)
    }
  },
  beforeRouteUpdate(to, from, next) {
    this.$nextTick(() => scrollTo(0, 0))
    next()
  }
}
</script>
