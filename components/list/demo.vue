<template>
    <mdc-layout-grid class="mdc-demo mdc-demo--container">
      <mdc-layout-cell>
        <mdc-list  dense  bordered >
          <mdc-list-item>Single-line item</mdc-list-item>
          <mdc-list-item>Single-line item</mdc-list-item>
          <mdc-list-item>Single-line item</mdc-list-item>
        </mdc-list>
      </mdc-layout-cell>

      <mdc-layout-cell>
        <mdc-list two-line dense bordered >
          <mdc-list-item>
            <span>First line</span>
            <span slot="secondary">Second line</span>
          </mdc-list-item>
          <mdc-list-item>
            <span>First line</span>
            <span slot="secondary">Second line</span>
          </mdc-list-item>
        </mdc-list>
      </mdc-layout-cell>

      <mdc-layout-cell>
        <mdc-list dense bordered>
          <mdc-list-item>
            <i slot="start-detail" class="material-icons">favorite_border</i>
            start details
          </mdc-list-item>
          <mdc-list-item>
            end details
            <i slot="end-detail" class="material-icons">star_border</i>
          </mdc-list-item>
          <mdc-list-item>
            <i slot="start-detail" class="material-icons">favorite_border</i>
            both details
            <i slot="end-detail" class="material-icons">star_border</i>
          </mdc-list-item>
        </mdc-list>
      </mdc-layout-cell>

  </mdc-layout-grid> 
</template>

