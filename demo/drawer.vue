<template>
  <mdc-drawer toggle-on="toggle-drawer">
    <mdc-drawer-header temporary></mdc-drawer-header>
    <mdc-drawer-list dense>
      <router-link tag="div"  v-for="link in links" :key="link.id"
        :to="link.to" >
        <mdc-drawer-item>{{link.name}}</mdc-drawer-item>
      </router-link>
    </mdc-drawer-list>
  </mdc-drawer>
</template>

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
