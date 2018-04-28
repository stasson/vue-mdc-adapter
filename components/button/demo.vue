<template>
  <div class="mdc-demo">
    <div
      class="mdc-demo--container"
      style="min-height: 40px; padding-bottom: 0">
      <div
        ref="buttons"
        class="mdc-demo-button">
        <mdc-button
          :dense="dense"
          :disabled="disabled"
          :raised="raised"
          :stroked="stroked"
          :unelevated="unelevated"
          :accent="accent">Button</mdc-button>
        <mdc-button
          :dense="dense"
          :disabled="disabled"
          :raised="raised"
          :stroked="stroked"
          :unelevated="unelevated"
          :accent="accent">Button</mdc-button>
        <mdc-button
          :dense="dense"
          :disabled="disabled"
          :raised="raised"
          :stroked="stroked"
          :unelevated="unelevated"
          :accent="accent">Button</mdc-button>
      </div>
    </div>

    <div class="mdc-demo--container">
      <div class="button-type-select">
        <mdc-radio
          v-model="type"
          label="baseline"
          name="button-type"
          checked/>
        <mdc-radio
          v-model="type"
          label="raised"
          name="button-type"/>
        <mdc-radio
          v-model="type"
          label="unelevated"
          name="button-type"/>
        <mdc-radio
          v-model="type"
          label="stroked"
          name="button-type"/>
      </div>

      <div class="button-style-select">
        <mdc-checkbox
          v-model="disabled"
          label="disabled"/>
        <mdc-checkbox
          v-model="dense"
          label="dense"/>
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
      disabled: false
    }
  },
  computed: {
    raised() {
      if (this.$refs.buttons) {
        this.$nextTick(() => {
          let children = [...this.$refs.buttons.children]
          children.forEach(({ __vue__ }) => __vue__.ripple.layout())
        })
      }
      return this.type == 'raised'
    },
    unelevated() {
      return this.type == 'unelevated'
    },
    stroked() {
      return this.type == 'stroked'
    }
  }
}
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
