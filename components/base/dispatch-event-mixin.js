import { eventBus } from '../common';

export const DispatchEventMixin = {
  props: {
    event: String,
    'event-target': Object,
    'event-args': Array,
  },
  methods: {
    dispatchEvent(evt) {
      this.$emit(evt.type);
      if (this.event) {
        let target = this.eventTarget || eventBus;
        let args = this.eventArgs || [];
        target.$emit(this.event, ...args);
      }
    },
  },
};
