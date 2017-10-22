<template>
  <div class="mdc-demo demo-list">
    <mdc-list bordered >
      <mdc-list-item>Single-line item</mdc-list-item>
      <mdc-list-item>Single-line item</mdc-list-item>
      <mdc-list-item>Single-line item</mdc-list-item>
    </mdc-list>
    <p><br></p>
    <mdc-list two-line bordered >
      <mdc-list-item>
        <span>First line</span>
        <span slot="secondary">Second line</span>
      </mdc-list-item>
      <mdc-list-item>
        <span>First line</span>
        <span slot="secondary">Second line</span>
      </mdc-list-item>
      <mdc-list-item>
        <span>First line</span>
        <span slot="secondary">Second line</span>
      </mdc-list-item>
    </mdc-list>
    <p><br></p>
    <mdc-list dense bordered >
      <mdc-list-item>Dense item</mdc-list-item>
      <mdc-list-item>Dense item</mdc-list-item>
      <mdc-list-item>Dense item</mdc-list-item>
    </mdc-list>
    <p><br></p>
    <mdc-list bordered >
      <mdc-list-item>
        <i slot="start-detail" class="material-icons">favorite_border</i>
        With start details
      </mdc-list-item>
      <mdc-list-item>
        With end details
        <i slot="end-detail" class="material-icons">star_border</i>
      </mdc-list-item>
      <mdc-list-item>
        <i slot="start-detail" class="material-icons">favorite_border</i>
        With both details
        <i slot="end-detail" class="material-icons">star_border</i>
      </mdc-list-item>
    </mdc-list>
    <p><br></p>
    <mdc-list-group bordered >
      <mdc-list-group-header>Group 1</mdc-list-group-header>
      <mdc-list>
        <mdc-list-item>Single-line item</mdc-list-item>
        <mdc-list-item>Single-line item</mdc-list-item>
        <mdc-list-item>Single-line item</mdc-list-item>
      </mdc-list>
      <mdc-list-group-divider></mdc-list-group-divider>
      <mdc-list-group-header>Group 2</mdc-list-group-header>
      <mdc-list>
        <mdc-list-item>Single-line item</mdc-list-item>
        <mdc-list-item>Single-line item</mdc-list-item>
        <mdc-list-item>Single-line item</mdc-list-item>
      </mdc-list>
    </mdc-list-group>
  </div>
</template>

<style>
  .demo-list {
    min-width:350px;
    max-width:45px;
  }
</style>