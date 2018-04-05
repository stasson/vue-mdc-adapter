export const DispatchEventMixin = {
  props: {
    event: String,
    'event-target': Object,
    'event-args': Array,
  },
  methods: {
    dispatchEvent(evt) {
      evt && this.$emit(evt.type, evt);
      if (this.event) {
        let target = this.eventTarget || this.$root;
        let args = this.eventArgs || [];
        target.$emit(this.event, ...args);
      }
    },
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        click: e => this.dispatchEvent(e),
      };
    },
  },
};
