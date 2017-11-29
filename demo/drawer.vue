<template>
  <mdc-drawer class="primary-drawer" ref="drawer" toggle-on="toggle-drawer">
    <mdc-drawer-header temporary></mdc-drawer-header>
    <mdc-drawer-list dense>
      <mdc-drawer-item to='/'>Home</mdc-drawer-item>
      <mdc-drawer-item to="/docs/getting-started">Getting Started</mdc-drawer-item>
      <mdc-drawer-divider />
      <mdc-drawer-item :to="link.to"
        v-for="link in links" :key="link.id">
        {{link.name}}
      </mdc-drawer-item>
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
  }
}  
</script>
