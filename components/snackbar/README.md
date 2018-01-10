## Usage

```html
<mdc-snackbar />
```


By default, `mdc-snackbar` listens to `vm.$root` for the `'show-snackbar'` event.
To show the snackbar, emit the event passing the _snackbar data object_
```javascript
vm.$root.$emit('show-snackbar', { message: 'A message' })
```

You can also specify an action handler:
```javascript
vm.$root.$emit('show-snackbar', {
  message: 'A message with action',
  actionText: 'undo',
  actionHandler: function () {
    //...
  }
})

```

Alternatively, you can also use the `show` method to trigger the display of the
snackbar

```html
<mdc-snackbar ref="snackbar"/>
```

```javascript
vm.$refs.snackbar.show({ message: 'Message' })

```


### snackbar data object

The event and `show` method takes an object for snackbar data. The table below shows the
properties and their usage.

| Property | Effect | Remarks | Type |
|-----------|--------|---------|---------|
| message   | The text message to display. | Required | String |
| timeout   | The amount of time in milliseconds to show the snackbar. | Optional (default 2750) | Integer |
| actionHandler | The function to execute when the action is clicked. | Optional | Function |
| actionText | The text to display for the action button. | Required if actionHandler is set |  String |
| multiline | Whether to show the snackbar with space for multiple lines of text | Optional |  Boolean |
| actionOnBottom | Whether to show the action below the multiple lines of text | Optional, applies when multiline is true |  Boolean |


### props

| props | Type | Default | Description |
|-------|------|---------|-------------|
| `event` | String | default `show-snackbar` | specifies the name of the event the snackbar listens to.|
| `event-source`|Vue| `vm.$root` | specifies the source of the event. must be a vue instance or component ref|
| `dismisses-on-action` |Boolean| true| Whether the snackbar will be dimissed when the user presses the action button.  |
| `align-start` |Boolean| false| Whether the snackbar is start aligned. |

### methods

| method | Description |
|--------|-------------|
| `show(data)` |  trigger the display of a message with optional action.|

# events 
| `@show` | notify listeners that the snackbar has been shown. |
| `@hide` | notify listeners that the snackbar has been hidden. |

### Reference
- <https://material.io/components/web/catalog/snackbars>



