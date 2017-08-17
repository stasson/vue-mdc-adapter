const selectMedia = new class {
  get query () {
    return this._query || (this._query =
      window.matchMedia('(max-width: 600px) and (pointer: coarse)'))
  }
}()

export const SelectMediaMixin = {
  data () {
    return {
      useNativeSelect: window && selectMedia.query.matches
    }
  },
  methods: {
    refreshNativeSelect (e) {
      this.useNativeSelect = selectMedia.query.matches
    }
  },
  beforeMount () {
    selectMedia.query.addListener(this.refreshNativeSelect)
  },
  beforeDestroy () {
    selectMedia.query.removeListener(this.refreshNativeSelect)
  }
}

export const SelectMixin = {
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: String,
    disabled: Boolean,
    label: String
  }
}

export const SelectItemMixin = {
  props: {
    value: String,
    disabled: Boolean
  }
}
