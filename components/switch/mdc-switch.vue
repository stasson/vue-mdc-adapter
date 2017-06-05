<template>
<div :class="{'mdc-form-field': label, 'mdc-form-field--align-end': label && alignEnd}">
  <div class="mdc-switch" :class="{ 'mdc-switch--disabled': disabled }">
    <input type="checkbox" :id="_uid" class="mdc-switch__native-control" 
      @change="onChanged" :checked="checked" :disabled="disabled"/>
    <div class="mdc-switch__background">
      <div class="mdc-switch__knob"></div>
    </div>
  </div>
  <label :for="_uid" v-if="label">{{ label }}</label>
</div>
</template>

<style lang="scss">
@import "@material/form-field/mdc-form-field";
@import "@material/switch/mdc-switch";
</style>


<script lang="babel">

export default {
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    'checked': Boolean,
    'true-value': { type: null, default () { return true } },
    'false-value': { type: null, default () { return false } },
    'label': String,
    'alignEnd': Boolean,
    'disabled': Boolean
  },
  methods: {
    onChanged (event) {
      this.$emit('change',
        event.target.checked ? this.trueValue : this.falseValue)
    }
  }
}
</script>
