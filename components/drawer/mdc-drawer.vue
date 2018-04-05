<template>
  <component  ref="drawer" class="mdc-drawer"
      :is="type" v-model="open_"
      :toolbar-spacer="toolbarSpacer"
      @change="busemit('mdc:layout')"
      @open="$emit('open')"
      @close="$emit('close')" >
    <slot />
  </component>
</template>

<script>
import mdcPermanentDrawer from './mdc-permanent-drawer.vue';
import mdcPersistentDrawer from './mdc-persistent-drawer.vue';
import mdcTemporaryDrawer from './mdc-temporary-drawer.vue';
import { eventBus } from '../common';

const media = new class {
  get small() {
    return (
      this._small || (this._small = window.matchMedia('(max-width: 839px)'))
    );
  }

  get large() {
    return (
      this._large || (this._large = window.matchMedia('(min-width: 1200px)'))
    );
  }
}();

export default {
  name: 'mdc-drawer',
  props: {
    permanent: Boolean,
    persistent: Boolean,
    temporary: Boolean,
    drawerType: {
      type: String,
      validator: val => {
        return val in ['temporary', 'persistent', 'permanent'];
      },
    },
    toolbarSpacer: Boolean,
    toggleOn: String,
    toggleOnSource: { type: Object, required: false },
    openOn: String,
    openOnSource: { type: Object, required: false },
    closeOn: String,
    closeOnSource: { type: Object, required: false },
  },
  provide() {
    return { mdcDrawer: this };
  },
  data() {
    return {
      small: false,
      large: false,
      open_: false,
    };
  },
  components: {
    'mdc-permanent-drawer': mdcPermanentDrawer,
    'mdc-persistent-drawer': mdcPersistentDrawer,
    'mdc-temporary-drawer': mdcTemporaryDrawer,
  },
  computed: {
    type() {
      if (this.permanent) {
        return 'mdc-permanent-drawer';
      } else if (this.persistent) {
        return 'mdc-persistent-drawer';
      } else if (this.temporary) {
        return 'mdc-temporary-drawer';
      } else {
        switch (this.drawerType) {
          case 'permanent':
            return 'mdc-permanent-drawer';
          case 'persistent':
            return 'mdc-persistent-drawer';
          case 'temporary':
            return 'mdc-temporary-drawer';
          default:
            return this.small
              ? 'mdc-temporary-drawer'
              : 'mdc-persistent-drawer';
        }
      }
    },
    isPermanent() {
      return this.permanent || this.type === 'mdc-permanent-drawer';
    },
    isPersistent() {
      return this.persistent || this.type === 'mdc-persistent-drawer';
    },
    isTemporary() {
      return this.temporary || this.type === 'mdc-temporary-drawer';
    },
    isResponsive() {
      return !(
        this.permanent ||
        this.persistent ||
        this.temporary ||
        this.drawerType
      );
    },
  },
  methods: {
    busemit(event) {
      eventBus.$emit(event);
    },
    open() {
      this.open_ = true;
    },
    close() {
      this.isPermanent || (this.open_ = false);
    },
    toggle() {
      this.isPermanent || (this.isOpen() ? this.close() : this.open());
    },
    isOpen() {
      return this.isPermanent || this.open_;
    },
    refreshMedia() {
      this.small = media.small.matches;
      this.large = media.large.matches;
      if (this.isResponsive) {
        if (this.large) {
          this.open();
        } else {
          this.close();
        }
      }
    },
  },
  created() {
    if (window && window.matchMedia) {
      this.small = media.small.matches;
      this.large = media.large.matches;
    }
  },
  mounted() {
    if (this.toggleOn) {
      this.toggleOnEventSource = this.toggleOnSource || this.$root;
      this.toggleOnEventSource.$on(this.toggleOn, this.toggle);
    }
    if (this.openOn) {
      this.openOnEventSource = this.openOnSource || this.$root;
      this.openOnEventSource.$on(this.openOn, this.open);
    }
    if (this.closeOn) {
      this.closeOnEventSource = this.closeOnSource || this.$root;
      this.closeOnEventSource.$on(this.closeOn, this.close);
    }
    media.small.addListener(this.refreshMedia);
    media.large.addListener(this.refreshMedia);
    this.$nextTick(() => this.refreshMedia());
  },
  beforeDestroy() {
    media.small.removeListener(this.refreshMedia);
    media.large.removeListener(this.refreshMedia);

    if (this.toggleOnEventSource) {
      this.toggleOnEventSource.$off(this.toggleOn, this.toggle);
    }
    if (this.openOnEventSource) {
      this.openOnEventSource.$off(this.openOn, this.open);
    }
    if (this.closeOnEventSource) {
      this.closeOnEventSource.$off(this.closeOn, this.close);
    }
  },
};
</script>
