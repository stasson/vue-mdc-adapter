<template>
  <mdc-drawer ref="drawer" toggle-on="toggle-drawer">
    <mdc-drawer-header temporary></mdc-drawer-header>
    <mdc-drawer-list dense>
      
      <mdc-drawer-item @click="$router.push('/')">
      <mdc-icon slot='start-detail' icon="home"  style="color:rgba(0, 0, 0, 0.87)"/>
      Home
      </mdc-drawer-item>
      <mdc-drawer-item @click="$router.push('/docs/getting-started')">
      <mdc-icon slot='start-detail' icon="power_setting_new" style="color:rgba(0, 0, 0, 0.87)" />
      Getting Started</mdc-drawer-item>
      
      <mdc-drawer-divider />
      
      <mdc-drawer-item v-for="link in links" :key="link.id"
        @click="$router.push(link.to)"
      >
        <img slot="start-detail" :src="link.icon" style="color:rgba(0, 0, 0, 0.54)" />
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
