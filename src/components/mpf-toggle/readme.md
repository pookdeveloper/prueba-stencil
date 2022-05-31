# mpf-toggle



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute       | Description                                                     | Type      | Default     |
| --------------- | --------------- | --------------------------------------------------------------- | --------- | ----------- |
| `disabled`      | `disabled`      | If `true`, the user cannot interact with the toggle.            | `boolean` | `false`     |
| `label`         | `label`         | Label name for switch                                           | `string`  | `undefined` |
| `labelposition` | `labelposition` | Label name for switch                                           | `string`  | `'right'`   |
| `name`          | `name`          | The name of the control, which is submitted with the form data. | `string`  | `undefined` |
| `selected`      | `selected`      | If `true`, the toggle is selected.                              | `boolean` | `false`     |


## Events

| Event       | Description                                  | Type                   |
| ----------- | -------------------------------------------- | ---------------------- |
| `mpfBlur`   | Emitted when the toggle loses focus.         | `CustomEvent<void>`    |
| `mpfChange` | Emitted when the value property has changed. | `CustomEvent<boolean>` |
| `mpfFocus`  | Emitted when the toggle has focus.           | `CustomEvent<void>`    |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
