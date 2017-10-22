<template>
  <mdc-layout-app>
    
    <toolbar slot='toolbar'/>
    
    <drawer slot="drawer"/>
    
    <main class="content">
      <router-view></router-view>
    </main>

  </mdc-layout-app>
</template>


<style>
.content {
  padding: 8px 16px;
  margin:16px auto 16px auto;
  max-width : 800px;
  min-width : 600px;
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

