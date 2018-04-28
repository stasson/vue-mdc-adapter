<template>
  <iframe 
    :src="iframe" 
    class="mdc-demo mdc-elevation--z1" 
    scrolling="no" 
    title="vue-mdc-adapter App Layout" 
    width="400" 
    height="250" 
    frameborder="no" 
    allowtransparency="false" 
    allowfullscreen="false"/>
</template>

<script>
import iframe from 'file-loader!./demo.html'
export default {
  data() {
    return {
      iframe
    }
  }
}
</script>
