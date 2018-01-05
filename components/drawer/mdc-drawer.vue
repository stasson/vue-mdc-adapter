<template>
  <component ref="drawer" class="mdc-drawer"
    :is="type" v-model="open_"
    :toolbar-spacer="toolbarSpacer">
    <slot />
  </component>
</template>

<script>
import mdcPermanentDrawer from './mdc-permanent-drawer.vue'
import mdcPersistentDrawer from './mdc-persistent-drawer.vue'
import mdcTemporaryDrawer from './mdc-temporary-drawer.vue'

const media = new class {
  get small () {
    return this._small || (this._small =
      window.matchMedia('(max-width: 839px)'))
  }

  get large () {
    return this._large || (this._large =
      window.matchMedia('(min-width: 1200px)'))
  }
}()

export default {
  name: 'mdc-drawer',
  props: {
    'permanent': Boolean,
    'persistent': Boolean,
    'temporary': Boolean,
    'drawer-type': {
      type: String,
      validator: (val) => {
        return val in ['temporary', 'persistent', 'permanent']
      }
    },
    'toggle-on': String,
    'toggle-on-source': {type: Object, required: false},
    'toolbar-spacer': Boolean
  },
  provide () {
    return { mdcDrawer: this }
  },
  data () {
    return {
      small: false,
      large: false,
      open_: false,
    }
  },
  components: {
    'mdc-permanent-drawer': mdcPermanentDrawer,
    'mdc-persistent-drawer': mdcPersistentDrawer,
    'mdc-temporary-drawer': mdcTemporaryDrawer
  },
  computed: {
    type () {
      if (this.permanent) {
        return 'mdc-permanent-drawer'
      } else if (this.persistent) {
        return 'mdc-persistent-drawer'
      } else if (this.temporary) {
        return 'mdc-temporary-drawer'
      } else {
        switch (this.drawerType) {
          case 'permanent':
            return 'mdc-permanent-drawer';
          case 'persistent':
            return 'mdc-persistent-drawer';
          case 'temporary':
            return 'mdc-temporary-drawer';
          default:
            return this.small ? 'mdc-temporary-drawer' : 'mdc-persistent-drawer'
        }
      }  
    },
    isPermanent () {
      return this.permanent || this.type === 'mdc-permanent-drawer'
    },
    isPersistent () {
      return this.persistent || this.type === 'mdc-persistent-drawer'
    },
    isTemporary () {
      return this.temporary || this.type === 'mdc-temporary-drawer'
    },
    isResponsive () {
      return !(this.permanent || this.persistent || this.temporary || this.drawerType)
    }
  },
  methods: {
    open () {
      this.open_ = true
    },
    close () {
      this.isPermanent || (this.open_ = false)
    },
    toggle () {
      this.isPermanent || (this.isOpen() ? this.close() : this.open())
    },
    isOpen () {
      return this.isPermanent|| ( this.open_ )
    },
    refreshMedia () {
      this.small = media.small.matches
      this.large = media.large.matches
      if (this.isResponsive) {
        if (this.large) {
          this.open()
        }
        else {
          this.close()
        }
      }
    }
  },
  created () {
    if (window && window.matchMedia) {
      this.small = media.small.matches
      this.large = media.large.matches
    }
  },
  mounted () {
    if (this.toggleOn) {
      let source = this.toggleOnSource || this.$root
      source.$on(this.toggleOn, () => this.toggle())
    }
    media.small.addListener(this.refreshMedia)
    media.large.addListener(this.refreshMedia)
    this.$nextTick(() => this.refreshMedia())
  },
  beforeDestroy () {
    media.small.removeListener(this.refreshMedia)
    media.large.removeListener(this.refreshMedia)
  }
}
</script>
