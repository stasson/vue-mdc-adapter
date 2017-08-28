export const DispatchEventMixin = {
  props: {
    'event': {
      type: String,
      required: false
    },
    'event-target': {
      type: Object,
      required: false
    },
    'event-args': {
      type: Array,
      required: false
    }
  },
  methods: {
    dispatchEvent (evt) {
      this.$emit(evt.type)
      if (this.event) {
        let target = this.eventTarget || this.$root
        let args = this.eventArgs || []
        target.$emit(this.event, ...args)
      }
    }
  }
}
