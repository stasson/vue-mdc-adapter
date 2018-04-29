<template>
  <div class="mdc-demo--appbar">
    <section class="mdc-demo">
      <mdc-top-app-bar title="Title2">
        <mdc-top-app-bar-action
          icon="help"
          @click="buttonText='show help'"/>
        <mdc-top-app-bar-action
          icon="info_outline"
          @click="buttonText='show information'"/>
      </mdc-top-app-bar>
      <br>
      <div v-if="buttonText">
        Button: <span class="demo-button-info">{{ buttonText }}</span>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  data() {
    return { buttonText: '' }
  }
}
</script>

<style>
@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');

.demo-button-info {
  font-style: italic;
}
.mdc-demo--appbar {
  width: 100%;
}

.mdc-demo .mdc-top-app-bar {
  position: relative;
}
</style>
