<template>
<div class="mdc-chip" :class="classes" :style="styles" tabindex="0" >
  <i class="mdc-chip__icon mdc-chip__icon--leading" 
    :class="leadingClasses" v-if="haveleadingIcon"
  >{{leadingIcon}}</i>
  <div classes="mdc-chip__text">
    <slot></slot>
  </div>
  <i class="mdc-chip__icon mdc-chip__icon--trailing" tabindex="0" role="button" 
    :class="trailingClasses" v-if="havetrailingIcon"
  >{{trailingIcon}}</i>
</div>
</template>

<script>
import MDCChipFoundation from "@material/chips/chip/foundation";
import { CustomLinkMixin, DispatchEventMixin } from "../base";
import { RippleBase } from "../ripple";

export default {
  name: "mdc-chip",
  mixins: [CustomLinkMixin, DispatchEventMixin],
  props: {
    leadingIcon: [String],
    trailingIcon: [String],
    leadingIconClasses: [Object],
    trailingIconClasses: [Object]
  },
  data() {
    return {
      classes: {},
      styles: {}
    };
  },
  methods: {},
  mounted() {
    this.foundation = new MDCChipFoundation({
      registerInteractionHandler: (type, handler) =>
        this.$el.addEventListener(type, handler),
      deregisterInteractionHandler: (type, handler) =>
        this.$el.removeEventListener(type, handler),
      notifyInteraction: () => {
        this.dispatchEvent({ type: 'click' })
      }
    });

    this.foundation.init();

    this.ripple = new RippleBase(this);
    this.ripple.init();
  },
  computed: {
    haveleadingIcon() {
      return !!this.leadingIcon || this.leadingIconClasses;
    },
    havetrailingIcon() {
      return !!this.trailingIcon || this.trailingIconClasses;
    },
    leadingClasses() {
      return Object.assign(
        {},
        {
          "material-icons": !!this.leadingIcon
        },
        this.leadingIconClasses
      );
    },
    trailingClasses() {
      return Object.assign(
        {},
        {
          "material-icons": !!this.trailingIcon
        },
        this.trailingIconClasses
      );
    }
  },
  beforeDestroy() {
    this.ripple.destroy();
    this.foundation.destroy();
  }
};
</script>
