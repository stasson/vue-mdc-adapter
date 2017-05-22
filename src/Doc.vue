<template>
  <div id="doc" class="mdc-typography">

    <img src="static/vmc-logo.png" style="height:100px; width:100px">
    <h1 class="mdc-typography--display3">Big header</h1>
    <p class="mdc-typography--body1">
      A paragraph with <span class="mdc-typography--body2">emphasis</span>.
    </p>

    <mdc-layout-grid class=grid margin=40 gutter=40>
      <mdc-layout-cell class="cell" desktop=3 tablet=3 >
        <p>Cell</p>
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

    <div>
      <mdc-button>Flat</mdc-button>
      <mdc-button primary>Flat</mdc-button>
      <mdc-button accent>Flat</mdc-button>
    </div>
    <div>
      <mdc-button dense >Dense</mdc-button>
      <mdc-button dense primary>Dense</mdc-button>
      <mdc-button dense accent>Dense</mdc-button>
    </div>
    <div>
      <mdc-button compact >Compact</mdc-button>
      <mdc-button compact no-ripple primary>Compact</mdc-button>
      <mdc-button compact accent>Compact</mdc-button>
    </div>
    <div>
      <mdc-button raised >Raised</mdc-button>
      <mdc-button raised no-ripple primary>Raised</mdc-button>
      <mdc-button raised accent>Raised</mdc-button>
    </div>
    <div>
      <mdc-button @click="showSnackbar">Snackbar</mdc-button>
      <mdc-button @click.native="showSnackbarNative">Snackbar Native</mdc-button>
      <mdc-snackbar ref="snackbar"></mdc-snackbar>
    </div>

    <mdc-grid-list with-icon-start with-support-text width=300>
      <mdc-grid-tile src="static/vmc-logo.png"
        :title="'Title ' + (index + 1)" cover icon="star_border" support-text="support text"
        v-for="(item, index) in 3" :key="index"></mdc-grid-tile>
    </mdc-grid-list>


  </div>
</template>

<script>
export default {
  // name: 'app',
  methods: {
    showSnackbar: function (event) {
      console.log('show snackbar')
      this.$refs.snackbar.show({
        message: 'Snackbar'
      })
    },
    showSnackbarNative: function (event) {
      console.log('show snackbar')
      this.$refs.snackbar.show({
        message: 'Show Snackbar Native'
      })
    }
  }
}
</script>

<style>

.grid {
  min-height: 100px;
  border: 1px solid;
}

.cell {
  border: 1px dashed;
}

#doc {
  text-align: center;
  margin-top: 60px;
}
</style>
