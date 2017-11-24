<template>
  <div class="mdc-demo mdc-demo--container">
    <mdc-button raised @click="showSnackbar">Show Snackbar</mdc-button>
    <mdc-snackbar ref="snackbar"></mdc-snackbar>
  </div>
</template>

<script>
export default{
  methods:{
    showSnackbar () {
      this.$root.$emit('show-snackbar', {
        message: 'This is a snackbar',
        actionText: 'action',
        actionHandler () {
        }
      })
    },
  }    
}
</script>