let bus_;

export const eventBus = {
  install(vue) {
    bus_ = new vue();
  },
  $emit(event, ...args) {
    bus_ && bus_.$emit(event, ...args);
  },
  $on(event, callback) {
    bus_ && bus_.$on(event, callback);
  },
  $once(event, callback) {
    bus_ && bus_.$once(event, callback);
  },
  $off(event, callback) {
    bus_ && bus_.$off(event, callback);
  },
};
