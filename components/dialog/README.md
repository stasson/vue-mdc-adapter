## Usage

```html
<mdc-dialog ref="dialog"
  title="Title" accept="Accept" cancel="Decline"
  @accept="onAccept" @cancel="onDecline"
>{{ dialogText }}</mdc-dialog>
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
|`accept-disabled`|String|`'Ok'`| the dialog accept button text   |
|`cancel`| String| `'cancel'`| the dialog cancel button text  |
|`scrollable`| Boolean| false | whether the dialog is scrollable |
|`accent`| Boolean| false | set accented style to the footer buttons |

### events

| props   | args |  Description |
|---------|------|--------------|
|`@accept`| none | emitted when dialog is accepted   |
|`@cancel`| none | emitted when dialog is cancelled  |

### Reference

<https://material.io/components/web/catalog/dialogs>
