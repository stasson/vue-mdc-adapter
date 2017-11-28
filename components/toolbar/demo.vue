<template>
<iframe class="mdc-demo mdc-elevation--z1" scrolling="no" title="vue-mdc-adapter App Layout"
  :src="iframe" width="400" height="150" frameborder='no'  
  allowtransparency='false' allowfullscreen='false'>
</iframe>
</template>

<script>
import iframe from 'file-loader!./demo.html'
export default {
  data () {
    return {
      iframe
    }
  }
}
</script>

