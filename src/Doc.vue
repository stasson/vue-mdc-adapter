<template>
  <div id="doc" class="mdc-typography">

  <section class="doc-section" style="text-align:center">
    <img src="static/vmc-logo.png" style="height:100px; width:100px">
    <h1 class="mdc-typography--display3">Big header</h1>
    <p class="mdc-typography--body1">
      A paragraph with <span class="mdc-typography--body2">emphasis</span>.
    </p>
  </section>

  <section class="doc-section">
    <mdc-card style="margin:auto">
      <mdc-card-media src="https://material-components-web.appspot.com/images/16-9.jpg">
        <mdc-card-header title="Title" subtitle="subtitle">
        </mdc-card-header>
      </mdc-card-media>
      <mdc-card-horizontal>
        <mdc-card-text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </mdc-card-text>
          <mdc-card-img src="static/vmc-logo.png" mult=1></mdc-card-img>
      </mdc-card-horizontal>
      <mdc-card-actions :actions="{action1:'Action1', action2:'Action2'}"
        @action1="log('action1')" @action2="log('action2')">
      </mdc-card-actions>
    </mdc-card>
  </section>


  <section class="doc-section">
    <mdc-grid-list with-icon-start with-support-text width=150>
      <mdc-grid-tile src="static/vmc-logo.png"
        :title="'Title ' + (index + 1)"
        support-text="support text" cover icon="star_border"
        v-for="(item, index) in 3" :key="index"></mdc-grid-tile>
    </mdc-grid-list>
  </section>

  <section class="doc-section" >
    <mdc-layout-grid class=grid>
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
  </section>

  <section class="doc-section" style="text-align:center">
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
      <mdc-button compact primary>Compact</mdc-button>
      <mdc-button compact accent>Compact</mdc-button>
    </div>
    <div>
      <mdc-button raised >Raised</mdc-button>
      <mdc-button raised primary>Raised</mdc-button>
      <mdc-button raised accent>Raised</mdc-button>
    </div>
  </section>

  <section class="doc-section" style="text-align:center">
    <mdc-fab>favorite</mdc-fab>
    <mdc-fab mini>favorite</mdc-fab>
    <mdc-fab plain>favorite</mdc-fab>
    <mdc-fab mini plain>favorite</mdc-fab>
    <mdc-fab mini disabled>favorite</mdc-fab>
    <mdc-fab absolute plain>mode_edit</mdc-fab>
  </section>

  <section class="doc-section" style="text-align:center">
    <div>
      <mdc-icon-toggle
        :toggle-on="{label: 'Remove from favorites', content: 'favorite'}"
        :toggle-off="{label: 'Add to favorites', content: 'favorite_border'}">
      ></mdc-icon-toggle>
      <mdc-icon-toggle primary
        :toggle-on="{label: 'Remove from favorites', content: 'favorite'}"
        :toggle-off="{label: 'Add to favorites', content: 'favorite_border'}">
      ></mdc-icon-toggle>
      <mdc-icon-toggle accent
        :toggle-on="{label: 'Remove from favorites', content: 'favorite'}"
        :toggle-off="{label: 'Add to favorites', content: 'favorite_border'}">
      ></mdc-icon-toggle>
    </div>
  </section>




  <section class="doc-section" style="text-align:center">
    <div>
      <mdc-button @click="showSnackbar">Snackbar</mdc-button>
      <mdc-button @click.native="showSnackbarNative">Snackbar Native</mdc-button>
      <mdc-snackbar ref="snackbar"></mdc-snackbar>
    </div>
  </section>


  <section class="doc-section" style="text-align:center">
    <div>
      <mdc-checkbox v-model="checked" :label="checked?'checked':'unchecked'"></mdc-checkbox>
      <mdc-checkbox disabled label="Disabled Checkbox"></mdc-checkbox>
    </div>
    <div>
      <mdc-textfield v-model="textField" label="Simple Textfield"></mdc-textfield>
      <p v-if="textField">{{ textField }}</p>

      <mdc-textfield label="Textfield with help text" helptext="Help text..."></mdc-textfield>
      <mdc-textfield label="Disabled text field" disabled></mdc-textfield>
      <mdc-textfield type="password" label="Password"
      required minlength=8 maxlength=10
      helptext="passord must be 8 to 10 characters"
      helptext-persistent helptext-validation
      v-model="password"></mdc-textfield>
      <p v-if="password">{{ password }}</p>
      <mdc-textfield label="Fullwidth text field" fullwidth ></mdc-textfield>
    </div>

    <div>
      <mdc-radio label="Radio1" name="radios" value="radio1" v-model="picked" checked></mdc-radio>
      <mdc-radio label="Radio2" name="radios" value="radio2" v-model="picked"></mdc-radio>
      <p>{{ picked }}</p>
    </div>

  </section>
  </div>
</template>

<script>
export default {
  // name: 'app',
  data () {
    return {
      checked: false,
      textField: '',
      password: '',
      picked: null
    }
  },
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
    },
    log (value) {
      console.log(value)
    }
  }
}
</script>

<style>

.grid {
  min-height: 50px;
  border: 1px solid;
}

.cell {
  border: 1px dashed;
}

#doc {
  margin-top: 60px;
}

.doc-section {
  margin: 70px auto;
  max-width: 720px;
}
</style>
