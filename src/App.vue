<template>
  <div id="app" class="mdc-typography">
    <img src="./assets/vmc-logo.png" style="height:150px; width:150px">
    <h1 class="mdc-typography--display2">Big header</h1>
    <p class="mdc-typography--body1">
      A paragraph with <span class="mdc-typography--body2">emphasis</span>.
    </p>
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
      <mdc-button raised v-ripple>Raised</mdc-button>
      <mdc-button raised primary>Raised</mdc-button>
      <mdc-button raised accent>Raised</mdc-button>
    </div> 
  </div>
</template>

<script>
import mdcButton from './components/mdc-button'
import mdcRipple from './components/mdc-ripple'

export default {
  name: 'app',
  components: {
    mdcButton
  },
  directives: {
    ripple: mdcRipple
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
