<template>
  <div class="mdc-demo mdc-demo--container">
      <mdc-list class="icon-demo">
        <mdc-list-item>
          Material Icon <mdc-icon slot="end-detail" icon="home"></mdc-icon>
        </mdc-list-item>
        <mdc-list-item>
          Awesome Font<mdc-icon slot="end-detail" class="fa fa-font-awesome"></mdc-icon>
        </mdc-list-item>
      </mdc-list>
  </div>
</template>

<style>
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");

.icon-demo .mdc-list-item {
  min-width: 150px;
}

</style>
