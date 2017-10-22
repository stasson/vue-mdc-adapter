<template>
  <mdc-drawer toggle-on="toggle-drawer">
    <mdc-drawer-header temporary></mdc-drawer-header>
    <mdc-list dense>
      <router-link tag="div"  v-for="link of links" :key="link.name"
        :to="link.to" >
        <mdc-drawer-item>{{link.name}}</mdc-drawer-item>
      </router-link>
    </mdc-list>
  </mdc-drawer>
</template>

<style>
  .mdc-drawer-header {
    background-image: url("./assets/logo.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
</style>


<script>
import links from './links.js'

export default { 
  data () {
    return {
      links
    }
  },
}  
</script>
