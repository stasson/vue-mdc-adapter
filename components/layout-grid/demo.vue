<template>
  <div class="mdc-demo">
    <mdc-layout-grid class=grid>
      <mdc-layout-cell class="cell" desktop=3 tablet=3 >
        <!--<p>mode: {{ $mdc.layout.mode }}</p>-->
        <!--<p>orientation: {{  $mdc.layout.orientation }}</p>-->
      </mdc-layout-cell>
      <mdc-layout-cell class="cell" desktop=3 tablet=5 align="top" >
        Top
      </mdc-layout-cell>
      <mdc-layout-cell class="cell" desktop=3 tablet=5 align="middle">
        Middle
      </mdc-layout-cell>
      <mdc-layout-cell class="cell" desktop=3 tablet=3 align="bottom">
        Bottom
      </mdc-layout-cell>
    </mdc-layout-grid>
  </div>
</template>

<style>
.mdc-demo .grid {
  min-height: 80px;
  min-width: 350px;
  border: 1px solid;
}

.mdc-demo .cell {
  border: 1px dashed;
}
  
</style>