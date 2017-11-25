<template>
  <div class="mdc-demo">
    <mdc-card>
      <mdc-card-media height=100 :src="card" size="cover" position="center">
        <mdc-card-header title="Vue.js" subtitle="is awesome" class="mdc-theme--dark"></mdc-card-header>
      </mdc-card-media>
      <mdc-card-horizontal>
        <mdc-card-text>
          Vue (pronounced /vjuː/, like <strong>view</strong>) is a <strong>progressive framework</strong> for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with <a href="single-file-components.html">modern tooling</a> and <a href="https://github.com/vuejs/awesome-vue#components--libraries" target="_blank" rel="external">supporting libraries</a>.
        </mdc-card-text>
          <mdc-card-img :src="tile" mult=1.5 ></mdc-card-img>
      </mdc-card-horizontal>
      <mdc-card-actions>
        <mdc-card-action-button href="https://vuejs.org/v2/guide/" >Documentation</mdc-card-action-button>
        <mdc-card-action-button href="https://github.com/vuejs" >Github</mdc-card-action-button>
      </mdc-card-actions>
    </mdc-card>
  </div>
</template>

<script>
import card from 'demo/assets/vue-banner.png'
import tile from 'demo/assets/vue-awesome.png'

export default {
  data () {
    return {
      tile, card
    }
  }
}
</script>
      