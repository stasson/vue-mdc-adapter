## Usage

```html
<mdc-dialog ref="dialog" title="Title" accept="Accept" cancel="Decline"
  @accept="onAccept" @cancel="onDecline">
  {{ dialogText }}  
</mdc-dialog>
```

```javascript
var vm = new Vue({
  data: {
    dialogText: 'Lorem ipsum dolor sit amet, ...',
  },
  methods: {
    showDialog () {
      this.$refs.dialog.show()
    },
    onAccept () {
      console.log('accepted')
    },
    onDecline () {
      console.log('declined')
    },
  }
})
```

### props

| props | Type | Default | Description |
|-------|------|---------|-------------|
|`title`|String| required | the dialog title |
|`accept`|String|`'Ok'`| the dialog accept button text   |
|`cancel`| String| `'cancel'`| the dialog cancel button text  |
|`scrollable`| String|| whether the dialog is scrollable |
|`@accept`| String|| emited when dialog is accepted   |
|`@cancel`| String|| emited when dialog is cancelled   |
|`dark`| boolean| | set the dark theme |


### Reference
- <https://material.io/components/web/catalog/dialogs>

