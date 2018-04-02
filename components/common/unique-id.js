let uid_ = 0;

const uidMixin = {
  beforeCreate() {
    this._vma_uid = `_vma_${uid_++}`;
  },
};

const VMAUniqueId = {
  install(Vue) {
    Vue.mixin(uidMixin);
  },
};

export { VMAUniqueId };
