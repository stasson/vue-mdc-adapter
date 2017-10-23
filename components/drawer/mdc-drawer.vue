<template>
  <component ref="drawer" class="mdc-drawer"
    :is="type" :open="open_" 
    :toolbar-spacer="toolbarSpacer">
    <slot />
  </component>
</template>

<script lang="babel">
import MDCPermanentDrawer from './mdc-permanent-drawer.vue'
import MDCPersistentDrawer from './mdc-persistent-drawer.vue'
import MDCTemporaryDrawer from './mdc-temporary-drawer.vue'

const media = new class {
  get mobile () {
    return this._mobile || (this._mobile =
      window.matchMedia('(max-width: 840px)'))
  }

  get xlarge () {
    return this._xlarge || (this._xlarge =
      window.matchMedia('(min-width: 1320px)'))
  }
}()

export default {
  name: 'mdc-drawer',
  props: {
    'permanent': Boolean,
    'persistent': Boolean,
    'temporary': Boolean,
    'toggle-on': String,
    'toggle-on-source': {type: Object, required: false},
    'toolbar-spacer': Boolean
  },
  provide () {
    return { mdcDrawer: this }
  },
  data () {
    return {
      mobile: false,
      xlarge: false,
      open_: false,
    }
  },
  components: {
    'mdc-permanent-drawer': MDCPermanentDrawer,
    'mdc-persistent-drawer': MDCPersistentDrawer,
    'mdc-temporary-drawer': MDCTemporaryDrawer
  },
  computed: {
    type () {
      if (this.permanent) {
        return 'mdc-permanent-drawer'
      } else if (this.persistent) {
        return 'mdc-persistent-drawer'
      } else if (this.temporary) {
        return 'mdc-temporary-drawer'
      } else if (this.mobile) {
        return 'mdc-temporary-drawer'
      } else {
        return 'mdc-persistent-drawer'
      }
    },
    isPermanent () {
      return this.permamnent || this.type === 'mdc-permanent-drawer'
    },
    isPersistent () {
      return this.persistent || this.type === 'mdc-persistent-drawer'
    },
    isTemporary () {
      return this.temporary || this.type === 'mdc-temporary-drawer'
    }
  },
  methods: {
    open () {
      this.open_ = true
    },
    close () {
      this.open_ = false
    },
    toggle () {
      this.open_ ? this.close() : this.open()
    },
    isOpen () {
      return this.open_
    },
    refreshMedia () {
      this.mobile = media.mobile.matches
      this.xlarge = media.xlarge.matches
      if (this.xlarge && this.isPersistent) this.open()
    }
  },
  beforeMount () {
    this.mobile = media.mobile.matches
    this.xlarge = media.xlarge.matches
  },
  mounted () {
    if (this.toggleOn) {
      let source = this.toggleOnSource || this.$root
      source.$on(this.toggleOn, () => this.toggle())
    }
    media.mobile.addListener(this.refreshMedia)
    media.xlarge.addListener(this.refreshMedia)
    this.refreshMedia()
  },
  beforeDestroy () {
    media.mobile.removeListener(this.refreshMedia)
    media.xlarge.removeListener(this.refreshMedia)
  }
}
</script>
