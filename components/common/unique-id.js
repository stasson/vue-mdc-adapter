let uid_ = 0;

const uidMixin = {
  beforeCreate() {
    this.vma_uid_ = `_vma_${uid_++}`;
  },
};

const VMAUniqueId = {
  install(Vue) {
    Vue.mixin(uidMixin);
  },
};

export { VMAUniqueId };
