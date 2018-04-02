import { VMAUniqueId } from './unique-id.js';
import { eventBus } from './event-bus.js';

const VueMDCCommon = {
  install(Vue) {
    VMAUniqueId.install(Vue);
    eventBus.install(Vue);
  },
};

export default VueMDCCommon;
