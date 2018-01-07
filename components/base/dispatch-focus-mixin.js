export const DispatchFocusMixin = {
  data () {
    return  {hasFocus: false}
  },
  methods: {
    onMouseDown() {
      this._active = true
    },
    onMouseUp () {
      this._active = false
    },
    onFocusEvent () {
      // dispatch async to let time to other focus event to propagate
      setTimeout(() => this.dispatchFocusEvent(),0)
    },
    onBlurEvent () {
      // dispatch async to let time to other focus event to propagate
      // also filtur blur if mousedown
      this._active || setTimeout(() => this.dispatchFocusEvent(),0)
    },
    dispatchFocusEvent() {
      let hasFocus = this.$el === document.activeElement || this.$el.contains(document.activeElement);
      if (hasFocus != this.hasFocus) {
        this.$emit(hasFocus ? 'focus' : 'blur')
        this.hasFocus = hasFocus
      }
    }
  },
  mounted () {
    this.$el.addEventListener('focusin', this.onFocusEvent)
    this.$el.addEventListener('focusout', this.onBlurEvent)
    this.$el.addEventListener('mousedown', this.onMouseDown)
    this.$el.addEventListener('mouseup', this.onMouseUp)
  },
  beforeDestroy () {
    this.$el.removeEventListener('focusin', this.onFocusEvent)
    this.$el.removeEventListener('focusout', this.onBlurEvent)
    this.$el.removeEventListener('mousedown', this.onMouseDown)
    this.$el.removeEventListener('mouseup', this.onMouseUp)
  }
}
