<template>
  <mdc-layout-app>
    
    <toolbar slot='toolbar'/>
    
    <drawer slot="drawer"/>
    
    <main class="content">
      <router-view></router-view>
    </main>

    <mdc-snackbar />

  </mdc-layout-app>
</template>


<style>
.content {
  padding-top: 8px;
  margin:16px;
}

</style>

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

