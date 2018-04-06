<template>
  <div class="mdc-demo mdc-demo--fluid">
    <mdc-layout-grid class="grid">
      <mdc-layout-cell class="cell cell1" desktop=3 tablet=3 ></mdc-layout-cell>
      <mdc-layout-cell class="cell cell2" desktop=3 tablet=5 align="top" >
        <mdc-body>
          align="top"
        </mdc-body>
      </mdc-layout-cell>
      <mdc-layout-cell class="cell cell3" desktop=3 tablet=5 align="middle">
        <mdc-body>
          align="middle"
        </mdc-body>
      </mdc-layout-cell>
      <mdc-layout-cell class="cell cell4" desktop=3 tablet=3 align="bottom">
        <mdc-body>
          align="bottom"
        </mdc-body>
      </mdc-layout-cell>
    </mdc-layout-grid>
  </div>
</template>

<style>
.mdc-demo .cell {
  border: 1px dashed;
  min-height: 50px;
  text-align: center;
  padding-top: 4px;
}

.mdc-demo .cell.cell1 {
  min-height: 100px;
}

.mdc-demo .cell.cell4 {
  min-height: 80px;
}
</style>
