let uid_ = 0;

export const VMAUniqueIdMixin = {
  beforeCreate() {
    this.vma_uid_ = `_vma_${uid_++}`;
  },
};
