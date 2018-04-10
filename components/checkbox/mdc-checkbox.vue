<template>
  <div :class=formFieldClasses class="mdc-checkbox-wrapper">
    <div ref="root" class="mdc-checkbox"
    :class="classes" :style="styles">
      <input ref="control" :id="vma_uid_" type="checkbox" :name="name"
        class="mdc-checkbox__native-control" :value="value"
        @change="onChange"/>
      <div class="mdc-checkbox__background">
        <svg class="mdc-checkbox__checkmark"
            viewBox="0 0 24 24">
          <path class="checkbox__checkmark-path"
                fill="none"
                stroke="white"
                d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
        </svg>
        <div class="mdc-checkbox__mixedmark"></div>
      </div>
    </div>
    <label ref="label"  :for="vma_uid_"
    ><slot>{{label}}</slot></label>
  </div>
</template>

<script>
/* global HTMLElement */
import MDCCheckboxFoundation from '@material/checkbox/foundation';
import MDCFormFieldFoundation from '@material/form-field/foundation';
import { getCorrectEventName } from '@material/animation';
import { DispatchFocusMixin } from '../base';
import { RippleBase } from '../ripple';

export default {
  name: 'mdc-checkbox',
  mixins: [DispatchFocusMixin],
  model: {
    prop: 'checked',
    event: 'change',
  },
  props: {
    checked: [Boolean, Array],
    indeterminate: Boolean,
    disabled: Boolean,
    label: String,
    'align-end': Boolean,
    value: {
      type: [String, Number],
      default() {
        return 'on';
      },
    },
    name: String,
  },
  data() {
    return {
      styles: {},
      classes: {},
    };
  },
  computed: {
    hasLabel() {
      return this.label || this.$slots.default;
    },
    formFieldClasses() {
      return {
        'mdc-form-field': this.hasLabel,
        'mdc-form-field--align-end': this.hasLabel && this.alignEnd,
      };
    },
  },
  watch: {
    checked: 'setChecked',
    disabled(value) {
      this.foundation.setDisabled(value);
    },
    indeterminate(value) {
      this.foundation.setIndeterminate(value);
    },
  },
  mounted() {
    this.foundation = new MDCCheckboxFoundation({
      addClass: className => this.$set(this.classes, className, true),
      removeClass: className => this.$delete(this.classes, className),
      setNativeControlAttr: (attr, value) => {
        this.$refs.control.setAttribute(attr, value);
      },
      removeNativeControlAttr: attr => {
        this.$refs.control.removeAttribute(attr);
      },
      registerAnimationEndHandler: handler =>
        this.$refs.root.addEventListener(
          getCorrectEventName(window, 'animationend'),
          handler,
        ),
      deregisterAnimationEndHandler: handler =>
        this.$refs.root.removeEventListener(
          getCorrectEventName(window, 'animationend'),
          handler,
        ),
      registerChangeHandler: handler =>
        this.$refs.control.addEventListener('change', handler),
      deregisterChangeHandler: handler =>
        this.$refs.control.removeEventListener('change', handler),
      getNativeControl: () => this.$refs.control,
      forceLayout: () => this.$refs.root.offsetWidth,
      isAttachedToDOM: () => Boolean(this.$el.parentNode),
    });

    this.ripple = new RippleBase(this, {
      isUnbounded: () => true,
      isSurfaceActive: () => RippleBase.isSurfaceActive(this.$refs.control),
      registerInteractionHandler: (evt, handler) => {
        this.$refs.control.addEventListener(evt, handler);
      },
      deregisterInteractionHandler: (evt, handler) => {
        this.$refs.control.addEventListener(evt, handler);
      },
      computeBoundingRect: () => {
        return this.$refs.root.getBoundingClientRect();
      },
    });

    this.formField = new MDCFormFieldFoundation({
      registerInteractionHandler: (type, handler) => {
        this.$refs.label.addEventListener(type, handler);
      },
      deregisterInteractionHandler: (type, handler) => {
        this.$refs.label.removeEventListener(type, handler);
      },
      activateInputRipple: () => {
        this.ripple && this.ripple.activate();
      },
      deactivateInputRipple: () => {
        this.ripple && this.ripple.deactivate();
      },
    });

    this.foundation.init();
    this.ripple.init();
    this.formField.init();
    this.setChecked(this.checked);
    this.foundation.setDisabled(this.disabled);
    this.foundation.setIndeterminate(this.indeterminate);
  },
  beforeDestroy() {
    this.formField.destroy();
    this.ripple.destroy();
    this.foundation.destroy();
  },
  methods: {
    setChecked(checked) {
      this.foundation.setChecked(
        Array.isArray(checked) ? checked.indexOf(this.value) > -1 : checked,
      );
    },

    onChange() {
      this.$emit('update:indeterminate', this.foundation.isIndeterminate());
      const isChecked = this.foundation.isChecked();

      if (Array.isArray(this.checked)) {
        const idx = this.checked.indexOf(this.value);
        if (isChecked) {
          idx < 0 && this.$emit('change', this.checked.concat(this.value));
        } else {
          idx > -1 &&
            this.$emit(
              'change',
              this.checked.slice(0, idx).concat(this.checked.slice(idx + 1)),
            );
        }
      } else {
        this.$emit('change', isChecked);
      }
    },
  },
};
</script>
