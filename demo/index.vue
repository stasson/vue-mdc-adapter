<template>
  <mdc-layout-app>
    
    <toolbar slot="toolbar"/>
    
    <drawer slot="drawer"/>
    
    <main class="content">
      <router-view/>
    </main>

  </mdc-layout-app>
</template>


<script>
import toolbar from './toolbar.vue'
import drawer from './drawer.vue'

export default {
  components: {
    toolbar,
    drawer
  }
}
</script>
