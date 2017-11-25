<template>
  <mdc-toolbar waterfall>
    <mdc-toolbar-row>
      <mdc-toolbar-section align-start >
        <mdc-toolbar-menu-icon event="toggle-drawer"></mdc-toolbar-menu-icon>
        <mdc-toolbar-title @click="$router.push('/')">vue-mdc-adapter</mdc-toolbar-title>
      </mdc-toolbar-section>
      <mdc-toolbar-section shrink-to-fit align-end>
        <mdc-toolbar-icon href="https://material.io/components/web/"
          target="_blank">
          <img :src="mdcLogo" width="32px"/>
        </mdc-toolbar-icon>
        <mdc-toolbar-icon href="https://vuejs.org/v2/guide/"
          target="_blank"
          class="vue-avatar">
          <img  :src="vueLogo" width="32px"/>
        </mdc-toolbar-icon>
        <mdc-toolbar-icon href="https://github.com/stasson/vue-mdc-adapter"
          target="_blank">
          <img :src="githubLogo" />
        </mdc-toolbar-icon>
      </mdc-toolbar-section>
    </mdc-toolbar-row>
  </mdc-toolbar>
</template>


<script>

import mdcLogo from './assets/mdc-logo.svg'
import vueLogo from './assets/vue-logo.png'
import githubLogo from './assets/github-logo.svg'

export default {
  data () {
    return {
      mdcLogo,
      vueLogo,
      githubLogo
    }
  }
}
</script>

<style>
.vue-avatar {
  width: 32px;
  height: 32px;
}
.vue-avatar img {
  border-radius: 32px;
  background-color: #F0F0F0;
}
</style>

