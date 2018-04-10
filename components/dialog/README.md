## Usage

```html
<mdc-button raised @click="open=!open">Show dialog</mdc-button>
<mdc-dialog v-model="open"
  title="Title" accept="Accept" cancel="Decline"
  @accept="onAccept" @cancel="onDecline">
  {{ dialogText }}
</mdc-dialog>
```

```javascript
var vm = new Vue({
  data: {
    dialogText: 'Lorem ipsum dolor sit amet, ...',
    open: false,
  },
  methods: {
    onAccept() {
      console.log('accepted');
    },
    onDecline() {
      console.log('declined');
    },
  },
});
```

### props

| props             | Type    | Default    | Description                              |
| ----------------- | ------- | ---------- | ---------------------------------------- |
| `open`            | Boolean | false      | optional v-model when true opens dialog  |
| `title`           | String  | required   | the dialog title                         |
| `accept`          | String  | `'Ok'`     | the dialog accept button text            |
| `accept-disabled` | String  | `'Ok'`     | the dialog accept button text            |
| `cancel`          | String  | `'cancel'` | the dialog cancel button text            |
| `scrollable`      | Boolean | false      | whether the dialog is scrollable         |
| `accent`          | Boolean | false      | set accented style to the footer buttons |

### events

| props       | args    | Description                                             |
| ----------- | ------- | ------------------------------------------------------- |
| `@change`   | Boolean | notify v-model/listeners that drawer state has changed. |
| `@accept`   | none    | emitted when dialog is accepted                         |
| `@cancel`   | none    | emitted when dialog is cancelled                        |
| `@validate` | accept  | emmited before the dialog is accepted _(\*)_            |

> Note that if you listen to the @validate event, then You must call
> the accept argument to finally close the box. Use `accept(false)` to
> prevent emitting the `accept` event and just close.

### Custom validation logic

You can use the `accept-disabled` property to prevent the dialog to close
when the accept button is clicked.

```html
<mdc-dialog ref="dialog" title="Dialog" accept="Accept" cancel="Decline"
  :accept-disabled="isThisNotAcceptable"
>Lorem ipsum dolor sit amet</mdc-dialog>
```

Or use the `@validate` event to trigger your own validation logic as follow:

```html
<mdc-dialog ref="dialog" title="Dialog" accept="Accept" cancel="Decline"
  @validate="onValidate"
>Lorem ipsum dolor sit amet</mdc-dialog>
```

```javascript
export default {
  methods: {
    onValidate({ accept }) {
      let isValid = false;
      // custom validation logic here
      // ..
      if (isValid) {
        accept();
      }
    },
  },
};
```

### Reference

<https://material.io/components/web/catalog/dialogs>
