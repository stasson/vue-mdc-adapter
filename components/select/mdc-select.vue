<template>
<div class="mdc-select" :class="classes">
  <select ref="native_control" class="mdc-select__native-control" v-on="listeners" v-bind="$attrs">
    <slot></slot>
  </select>
  <div ref="label" class="mdc-select__label" :class="labelClasses">{{label}}</div>
  <div ref="bottomLine" class="mdc-select__bottom-line" :class="bottomLineClasses"></div>
</div>
</template>

<script>
import { mdcOption } from './mdc-option.vue';
import { mdcOptgroup } from './mdc-optgroup.vue';
import MDCSelectFoundation from '@material/select/foundation';
import MDCSelectBottomLineFoundation from '@material/select/bottom-line/foundation';
import MDCSelectLabelFoundation from '@material/select/label/foundation';
import { RippleBase } from '../ripple';

export default {
  name: 'mdc-select',
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    value: [String, Array],
    disabled: Boolean,
    label: String,
    box: Boolean,
  },
  inheritAttrs: false,
  data() {
    return {
      classes: {
        'mdc-select--box': this.box,
      },
      labelClasses: {},
      bottomLineClasses: {},
    };
  },
  components: {
    'mdc-option': mdcOption,
    'mdc-optgroup': mdcOptgroup,
  },
  watch: {
    disabled(value) {
      this.foundation && this.foundation.setDisabled(value);
    },
    box() {
      this.$set(this.classes, 'mdc-select--box', this.box);
    },
  },
  methods: {},
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        change: event => this.$emit('change', event.target.value),
      };
    },
  },
  mounted() {
    this.labelFoundation = new MDCSelectLabelFoundation({
      addClass: className => this.$set(this.labelClasses, className, true),
      removeClass: className => this.$delete(this.labelClasses, className),
    });

    this.bottomLineFoundation = new MDCSelectBottomLineFoundation({
      addClass: className => {
        this.$set(this.bottomLineClasses, className, true);
      },
      removeClass: className => {
        this.$delete(this.bottomLineClasses, className);
      },
    });
    this.bottomLineFoundation.init();

    this.foundation = new MDCSelectFoundation({
      addClass: className => this.$set(this.classes, className, true),
      removeClass: className => this.$delete(this.classes, className),
      floatLabel: value => {
        this.labelFoundation.styleFloat(value);
      },
      activateBottomLine: () => {
        this.bottomLineFoundation.activate();
      },
      deactivateBottomLine: () => {
        this.bottomLineFoundation.deactivate();
      },
      registerInteractionHandler: (type, handler) =>
        this.$refs.native_control.addEventListener(type, handler),
      deregisterInteractionHandler: (type, handler) =>
        this.$refs.native_control.removeEventListener(type, handler),
      getSelectedIndex: () => this.$refs.native_control.selectedIndex,
      setSelectedIndex: index =>
        (this.$refs.native_control.selectedIndex = index),
      setDisabled: disabled => (this.$refs.native_control.disabled = disabled),
      getValue: () => this.$refs.native_control.value,
      setValue: value => (this.$refs.native_control.value = value),
    });

    this.labelFoundation.init();
    this.foundation.init();
    this.foundation.setDisabled(this.disabled);

    if (this.box) {
      this.ripple = new RippleBase(this);
      this.ripple.init();
    }
  },
  beforeDestroy() {
    let foundation = this.foundation;
    this.foundation = null;
    foundation.destroy();

    let labelFoundation = this.labelFoundation;
    this.labelFoundation = null;
    labelFoundation.destroy();

    let bottomLineFoundation = this.bottomLineFoundation;
    this.bottomLineFoundation = null;
    bottomLineFoundation.destroy();

    this.ripple && this.ripple.destroy();
  },
};
</script>
