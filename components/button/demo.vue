<template>
  <div class="mdc-demo">
    <div class="mdc-demo--container" style="min-height: 40px; padding-bottom: 0">
      <div class="mdc-demo-button">
        <mdc-button :dense="dense" :disabled="disabled" 
          :raised="raised" :stroked="stroked" :unelevated="unelevated" 
          :accent="accent">Button</mdc-button>
        <mdc-button :dense="dense" :disabled="disabled"
          :raised="raised" :stroked="stroked" :unelevated="unelevated" 
          :accent="accent">Button</mdc-button>
        <mdc-button :dense="dense" :disabled="disabled"
          :raised="raised" :stroked="stroked" :unelevated="unelevated"
          :accent="accent">Button</mdc-button>
      </div>  
    </div>  

    <div class="mdc-demo--container">
      <div class="button-type-select">
        <mdc-radio label="baseline" name="button-type" v-model="type" checked></mdc-radio>
        <mdc-radio label="raised" name="button-type" v-model="type" ></mdc-radio>
        <mdc-radio label="unelevated" name="button-type" v-model="type"></mdc-radio>
        <mdc-radio label="stroked" name="button-type" v-model="type"></mdc-radio>
      </div>

      <div class="button-style-select">
        <mdc-checkbox label="disabled" v-model="disabled"></mdc-checkbox>
        <mdc-checkbox label="dense"  v-model="dense"></mdc-checkbox>
        <mdc-checkbox label="accent"  v-model="accent"></mdc-checkbox>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: '',
      dense: false,
      disabled: false,
      accent: false,
    };
  },
  computed: {
    raised() {
      return this.type == 'raised';
    },
    unelevated() {
      return this.type == 'unelevated';
    },
    stroked() {
      return this.type == 'stroked';
    },
  },
};
</script>


<style>
.mdc-demo-button {
  margin: 0 auto;
  text-align: center;
}

.button-type-select,
.button-style-select {
  margin: 0 32px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
}
</style>
