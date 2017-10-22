<template>
  <div class="mdc-demo linear-progress-demo">
    <mdc-linear-progress progress=0.5></mdc-linear-progress>
    <p><mdc-caption>Determinate</mdc-caption></p>
    <br>
    <mdc-linear-progress indeterminate></mdc-linear-progress>
    <p><mdc-caption>Indeterminate</mdc-caption></p>
    <br>
    <mdc-linear-progress progress=0.5 buffer=0.75></mdc-linear-progress>
    <p><mdc-caption>Buffer</mdc-caption></p>
    <br>

    <mdc-linear-progress reverse progress=0.5></mdc-linear-progress>
    <p><mdc-caption>Reversed</mdc-caption></p>
    <br>
    <mdc-linear-progress reverse indeterminate></mdc-linear-progress>
    <p><mdc-caption>Indeterminate Reversed</mdc-caption></p>
    <br>
    <mdc-linear-progress reverse progress=0.5 buffer=0.75></mdc-linear-progress>
    <p><mdc-caption>Buffer Reversed</mdc-caption></p>
    <br>

    <mdc-linear-progress accent progress=0.5></mdc-linear-progress>
    <p><mdc-caption>Accent</mdc-caption></p>
  </div>
</template>

<style>
.linear-progress-demo {
  min-width:350px;
  min-width:450px;
}
</style>