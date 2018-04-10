## Usage

```html
<mdc-snackbar v-model="snack"/>
<mdc-snackbar ref="snackbar"/>
```

`mdc-snackbar` will show the snackbar whenever the `snack` property is updated (normal Vue reactivity).
Alternatively, by default `mdc-snackbar` listens to `vm.$root` for the `'show-snackbar'` event.
To show the snackbar, emit the event passing the _snackbar data object_

```html
<mdc-button raised @click="showSnackbar">Show Snackbar</mdc-button>
<mdc-snackbar v-model="snack"></mdc-snackbar>
```

```javascript
let n = 0;
// ...
methods: {
  showSnackbar() {
    this.snack = {
      message: `This is a snackbar: ${n++}`,
      actionText: 'action',
      actionHandler() {/* do action */},
    };
  },
},
```

or using global event bus

```html
<mdc-button raised @click="showSnackbar">Show Snackbar</mdc-button>
<mdc-snackbar ref="snackbar"/>
```

```javascript
// ...
methods: {
  showSnackbar() {
     vm.$root.$emit('show-snackbar', {
       message: 'A message with action',
       actionText: 'undo',
       actionHandler() {/* do action */},
     });
  },
}
```

Alternatively, you can also use the `show` method to trigger the display of the
snackbar.

```html
<mdc-snackbar ref="snackbar"/>
```

```javascript
vm.$refs.snackbar.show({ message: 'Message' });
```

### props

| props                 | Type    | Default                          | Description                                                                    |
| --------------------- | ------- | -------------------------------- | ------------------------------------------------------------------------------ |
| `snack`               | Object  |                                  | optional v-model when set shows snackbar                                       |
| `event`               | String  | `show-snackbar` if no snack prop | specifies the name of the event the snackbar listens to.                       |
| `event-source`        | Vue     | `vm.$root`                       | specifies the source of the event. must be a vue instance or component ref     |
| `dismisses-on-action` | Boolean | true                             | Whether the snackbar will be dimissed when the user presses the action button. |
| `align-start`         | Boolean | false                            | Whether the snackbar is start aligned.                                         |

### methods

| method       | Description                                            |
| ------------ | ------------------------------------------------------ |
| `show(data)` | trigger the display of a message with optional action. |

# events

| Name      | Description                                               |
| --------- | --------------------------------------------------------- |
| `@queued` | notify v-model/listeners that snack data has been queued. |
| `@show`   | notify listeners that the snackbar has been shown.        |
| `@hide`   | notify listeners that the snackbar has been hidden.       |

### snackbar data object

The `snack` prop, event, and `show` method takes an object for snackbar data. The table below shows the
properties and their usage.

| Property       | Effect                                                             | Remarks                                  | Type     |
| -------------- | ------------------------------------------------------------------ | ---------------------------------------- | -------- |
| message        | The text message to display.                                       | Required                                 | String   |
| timeout        | The amount of time in milliseconds to show the snackbar.           | Optional (default 2750)                  | Integer  |
| actionHandler  | The function to execute when the action is clicked.                | Optional                                 | Function |
| actionText     | The text to display for the action button.                         | Required if actionHandler is set         | String   |
| multiline      | Whether to show the snackbar with space for multiple lines of text | Optional                                 | Boolean  |
| actionOnBottom | Whether to show the action below the multiple lines of text        | Optional, applies when multiline is true | Boolean  |

### Reference

* <https://material.io/components/web/catalog/snackbars>
