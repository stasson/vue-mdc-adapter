<template>
  <div class="mdc-demo mdc-demo--container">
    <mdc-button raised @click="showSnackbar">Show Snackbar</mdc-button>
    <mdc-snackbar v-model="snack"></mdc-snackbar>
  </div>
</template>

<script>
let n = 0;
export default {
  data() {
    return {
      snack: {},
    };
  },
  methods: {
    showSnackbar() {
      this.snack = {
        message: `This is a snackbar: ${n++}`,
        actionText: 'action',
        actionHandler() {},
      };
    },
  },
};
</script>
