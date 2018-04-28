<template>
  <component 
    ref="drawer" 
    :is="type"
    v-model="open_" 
    :toolbar-spacer="toolbarSpacer"
    class="mdc-drawer"
    @change="onChange"
    @open="$emit('open')"
    @close="$emit('close')" >
    <slot />
  </component>
</template>

<script>
import mdcPermanentDrawer from './mdc-permanent-drawer.vue'
import mdcPersistentDrawer from './mdc-persistent-drawer.vue'
import mdcTemporaryDrawer from './mdc-temporary-drawer.vue'

const media = new class {
  get small() {
    return (
      this._small || (this._small = window.matchMedia('(max-width: 839px)'))
    )
  }

  get large() {
    return (
      this._large || (this._large = window.matchMedia('(min-width: 1200px)'))
    )
  }
}()

export default {
  name: 'mdc-drawer',
  components: {
    'mdc-permanent-drawer': mdcPermanentDrawer,
    'mdc-persistent-drawer': mdcPersistentDrawer,
    'mdc-temporary-drawer': mdcTemporaryDrawer
  },
  model: {
    prop: 'open',
    event: 'change'
  },
  props: {
    open: Boolean,
    permanent: Boolean,
    persistent: Boolean,
    temporary: Boolean,
    drawerType: {
      type: String,
      validator: val => {
        return val in ['temporary', 'persistent', 'permanent']
      }
    },
    toolbarSpacer: Boolean,
    toggleOn: String,
    toggleOnSource: { type: Object, required: false },
    openOn: String,
    openOnSource: { type: Object, required: false },
    closeOn: String,
    closeOnSource: { type: Object, required: false }
  },
  provide() {
    return { mdcDrawer: this }
  },
  data() {
    return {
      small: false,
      large: false,
      open_: false
    }
  },
  computed: {
    type() {
      if (this.permanent) {
        return 'mdc-permanent-drawer'
      } else if (this.persistent) {
        return 'mdc-persistent-drawer'
      } else if (this.temporary) {
        return 'mdc-temporary-drawer'
      } else {
        switch (this.drawerType) {
          case 'permanent':
            return 'mdc-permanent-drawer'
          case 'persistent':
            return 'mdc-persistent-drawer'
          case 'temporary':
            return 'mdc-temporary-drawer'
          default:
            return this.small ? 'mdc-temporary-drawer' : 'mdc-persistent-drawer'
        }
      }
    },
    isPermanent() {
      return this.permanent || this.type === 'mdc-permanent-drawer'
    },
    isPersistent() {
      return this.persistent || this.type === 'mdc-persistent-drawer'
    },
    isTemporary() {
      return this.temporary || this.type === 'mdc-temporary-drawer'
    },
    isResponsive() {
      return !(
        this.permanent ||
        this.persistent ||
        this.temporary ||
        this.drawerType
      )
    }
  },
  watch: {
    open: 'onOpen_'
  },
  created() {
    if (window && window.matchMedia) {
      this.small = media.small.matches
      this.large = media.large.matches
    }
  },
  mounted() {
    if (this.toggleOn) {
      this.toggleOnEventSource = this.toggleOnSource || this.$root
      this.toggleOnEventSource.$on(this.toggleOn, this.toggleDrawer)
    }
    if (this.openOn) {
      this.openOnEventSource = this.openOnSource || this.$root
      this.openOnEventSource.$on(this.openOn, this.openDrawer)
    }
    if (this.closeOn) {
      this.closeOnEventSource = this.closeOnSource || this.$root
      this.closeOnEventSource.$on(this.closeOn, this.closeDrawer)
    }
    media.small.addListener(this.refreshMedia)
    media.large.addListener(this.refreshMedia)
    this.$nextTick(() => this.refreshMedia())
  },
  beforeDestroy() {
    media.small.removeListener(this.refreshMedia)
    media.large.removeListener(this.refreshMedia)

    if (this.toggleOnEventSource) {
      this.toggleOnEventSource.$off(this.toggleOn, this.toggleDrawer)
    }
    if (this.openOnEventSource) {
      this.openOnEventSource.$off(this.openOn, this.openDrawer)
    }
    if (this.closeOnEventSource) {
      this.closeOnEventSource.$off(this.closeOn, this.closeDrawer)
    }
  },
  methods: {
    onOpen_(value) {
      this.isPermanent || (this.open_ = value)
    },
    onChange(event) {
      this.$emit('change', event)
      this.$root.$emit('vma:layout')
    },
    openDrawer() {
      this.open_ = true
    },
    closeDrawer() {
      this.isPermanent || (this.open_ = false)
    },
    toggleDrawer() {
      this.isPermanent ||
        (this.isOpen() ? this.closeDrawer() : this.openDrawer())
    },
    isOpen() {
      return this.isPermanent || this.open_
    },
    refreshMedia() {
      this.small = media.small.matches
      this.large = media.large.matches
      if (this.isResponsive) {
        if (this.large) {
          this.openDrawer()
        } else {
          this.closeDrawer()
        }
      }
    }
  }
}
</script>
