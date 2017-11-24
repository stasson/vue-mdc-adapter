<template>
  <div class="mdc-demo mdc-demo--container">
    <div  class="linear-progress-demo">
      <mdc-linear-progress progress=0.5></mdc-linear-progress>
      <p><mdc-caption>Determinate</mdc-caption></p>
      <br>
      <mdc-linear-progress indeterminate></mdc-linear-progress>
      <p><mdc-caption>Indeterminate</mdc-caption></p>
      <br>
      <mdc-linear-progress progress=0.5 buffer=0.75></mdc-linear-progress>
      <p><mdc-caption>Buffer</mdc-caption></p>
      <br>
      <mdc-linear-progress accent progress=0.5></mdc-linear-progress>
      <p><mdc-caption>Accent</mdc-caption></p>
    </div>
  </div>
</template>

<style>
.linear-progress-demo {
  flex:1;
  min-width:150px;
  max-width:450px;
}
</style>
