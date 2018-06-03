const scope =
  Math.floor(Math.random() * Math.floor(0x10000000)).toString() + '-'

export const VMAUniqueIdMixin = {
  beforeCreate() {
    this.vma_uid_ = scope + this._uid
  }
}
