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
| `title`           | String  | undefined  | the dialog title                         |
| `accept`          | String  | `'Ok'`     | the dialog accept button text            |
| `accept-disabled` | Boolean | false      | disable the accept button                |
| `cancel`          | String  | undefined  | the dialog cancel button text            |
| `scrollable`      | Boolean | false      | whether the dialog is scrollable         |
| `accent`          | Boolean | false      | set accented style to the footer buttons |

> In order to hide the Dialog Footer, force the accept property to `""`  

### events

| props             | args    | Description                                             |
| ----------------- | ------- | ------------------------------------------------------- |
| `@change`         | Boolean | notify v-model/listeners that drawer state has changed. |
| `@accept`         | none    | emitted when dialog is accepted                         |
| `@cancel`         | none    | emitted when dialog is cancelled                        |
| `@validate`       | accept  | emitted before the dialog is accepted _(\*)_            |
| `@validateCancel` | cancel  | emitted before the dialog is cancelled _(\*)_           |

> Note that if you listen to the @validate or @validateCancel events, then You must call
> the accept or cancel argument to finally close the box. Use `accept(false)` to
> prevent emitting the `accept` event and just close, and `cancel(false)` to prevent emitting
> the `cancel` event.

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

You can use `@validateCancel` to trigger validation logic for the cancel event, as follows:

```html
<mdc-dialog ref="dialog" title="Dialog" accept="Accept" cancel="Decline"
  @validateCancel="onValidateCancel"
>Lorem ipsum dolor sit amet</mdc-dialog>
```

```javascript
export default {
  methods: {
    onValidateCancel({ cancel }) {
      let isValid = false;
      // custom validation logic here
      // ..
      if (isValid) {
        cancel();
      }
    },
  },
};
```

### Reference

<https://material.io/components/web/catalog/dialogs>
