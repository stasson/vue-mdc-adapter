<template>
<div :class="classes" :style="styles" tabindex="0" v-on="$listeners">
  <i ref="leadingIcon" class="mdc-chip__icon mdc-chip__icon--leading"
    :class="leadingClasses" v-if="haveleadingIcon"
  >{{leadingIcon}}</i>
  <div class="mdc-chip__checkmark" v-if="isFilter">
    <svg class="mdc-chip__checkmark-svg" viewBox="-2 -3 30 30">
      <path class="mdc-chip__checkmark-path" fill="none" stroke="black"
            d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
    </svg>
  </div>
  <div class="mdc-chip__text">
    <slot></slot>
  </div>
  <i ref="trailingIcon" class="mdc-chip__icon mdc-chip__icon--trailing" tabindex="0" role="button"
    :class="trailingClasses" v-if="havetrailingIcon"
  >{{trailingIcon}}</i>
</div>
</template>

<script>
import MDCChipFoundation from '@material/chips/chip/foundation';
import { CustomLinkMixin, emitCustomEvent } from '../base';
import { RippleBase } from '../ripple';

export default {
  name: 'mdc-chip',
  mixins: [CustomLinkMixin],
  props: {
    leadingIcon: [String],
    trailingIcon: [String],
    leadingIconClasses: [Object],
    trailingIconClasses: [Object],
  },
  inject: ['mdcChipSet'],
  data() {
    return {
      classes: {
        'mdc-chip': true,
      },
      styles: {},
    };
  },
  methods: {
    toggleSelected() {
      this.foundation.toggleSelected();
    },
  },
  mounted() {
    this.foundation = new MDCChipFoundation({
      addClass: className => this.$set(this.classes, className, true),
      removeClass: className => this.$delete(this.classes, className),
      hasClass: className => this.$el.classList.contains(className),
      addClassToLeadingIcon: className => {
        if (this.haveleadingIcon) {
          this.$refs.leadingIcon.classList.add(className);
        }
      },
      removeClassFromLeadingIcon: className => {
        if (this.haveleadingIcon) {
          this.$refs.leadingIcon.classList.remove(className);
        }
      },
      eventTargetHasClass: (target, className) =>
        target.classList.contains(className),
      registerEventHandler: (evtType, handler) =>
        this.$el.addEventListener(evtType, handler),
      deregisterEventHandler: (evtType, handler) =>
        this.$el.removeEventListener(evtType, handler),
      notifyInteraction: () => {
        emitCustomEvent(
          this.$el,
          MDCChipFoundation.strings.INTERACTION_EVENT,
          {
            chip: this,
          },
          true,
        );
      },
      notifyTrailingIconInteraction: () => {
        this.$emit('trailingIconClick');
        emitCustomEvent(
          this.$el,
          MDCChipFoundation.strings.TRAILING_ICON_INTERACTION_EVENT,
          {
            chip: this,
          },
          true,
        );
      },

      registerTrailingIconInteractionHandler: (evtType, handler) => {
        if (this.$refs.trailingIcon) {
          this.$refs.trailingIcon.addEventListener(evtType, handler);
        }
      },
      deregisterTrailingIconInteractionHandler: (evtType, handler) => {
        if (this.$refs.trailingIcon) {
          this.$refs.trailingIcon.removeEventListener(evtType, handler);
        }
      },
    });

    this.foundation.init();

    this.ripple = new RippleBase(this);
    this.ripple.init();
  },
  computed: {
    isFilter() {
      return this.mdcChipSet && this.mdcChipSet.filter;
    },
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
          'material-icons': !!this.leadingIcon,
        },
        this.leadingIconClasses,
      );
    },
    trailingClasses() {
      return Object.assign(
        {},
        {
          'material-icons': !!this.trailingIcon,
        },
        this.trailingIconClasses,
      );
    },
  },
  beforeDestroy() {
    this.ripple.destroy();
    this.foundation.destroy();
  },
};
</script>
