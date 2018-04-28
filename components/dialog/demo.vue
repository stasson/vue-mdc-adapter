<template>
  <div class="mdc-demo mdc-demo--container">

    <mdc-dialog 
      v-model="open" 
      title="Dialog" 
      accept="Accept" 
      cancel="Decline" 
      @validate="$event.accept(false)">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      ea commodo consequat.
    </mdc-dialog>

    <mdc-button 
      raised 
      @click="open=!open">Show Dialog</mdc-button>

  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false
    }
  }
}
</script>
