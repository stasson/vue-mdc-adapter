<template>
  <mdc-drawer toggle-on="toggle-drawer">
    <mdc-drawer-header temporary></mdc-drawer-header>
    <mdc-drawer-list>
      <router-link tag="div"  v-for="link of links" :key="link.name"
        :to="link.to" >
        <mdc-drawer-item>{{link.name}}</mdc-drawer-item>
      </router-link>
    </mdc-drawer-list>
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
import demos from './demos'
import {capitalize} from './utils'

const links = Object.keys(demos).reduce((result, key)=>{
  key = key.replace('-demo','')
  result.push({
    name: capitalize(key),
    to: { name: 'component', params: {id: key} },
  })
  return result
}, [] )

export default { 
  data () {
    return {
      links      
    }
  },
}  
</script>

