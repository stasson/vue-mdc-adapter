<template>
  <div class="mdc-chip" :class="classes" :style="styles" tabindex="0" @click="dispatchEvent">
    <div classes="mdc-chip__text">
      <i class="material-icons mdc-chip__icon mdc-chip__icon--leading" v-if="icon && !trailing">{{icon}}</i>
      <slot></slot>
      <i class="material-icons mdc-chip__icon mdc-chip__icon--trailing" tabindex="0" role="button" v-if="icon && trailing">{{icon}}</i>
    </div>
  </div>  
</template>

<script>
import MDCChipFoundation from '@material/chips/chip/foundation';
import { CustomLinkMixin, DispatchEventMixin, emitCustomEvent } from '../base';
import { RippleBase } from '../ripple';

export default {
  name: 'mdc-chip',
  mixins: [CustomLinkMixin, DispatchEventMixin],
  props: {
    icon: [String],
    trailing: Boolean,
  },
  data() {
    return {
      classes: {},
      styles: {},
    };
  },
  methods: {},
  mounted() {
    this.foundation = new MDCChipFoundation({
      registerInteractionHandler: (type, handler) => this.$el.addEventListener(type, handler),
      deregisterInteractionHandler: (type, handler) => this.$el.removeEventListener(type, handler),
      notifyInteraction: () =>
        emitCustomEvent(this.$el, MDCChipFoundation.strings.INTERACTION_EVENT, { chip: this }, true),
    });

    this.foundation.init();

    this.ripple = new RippleBase(this);
    this.ripple.init();
  },
  beforeDestroy() {
    this.ripple.destroy();
    this.foundation.destroy();
  },
};
</script>
