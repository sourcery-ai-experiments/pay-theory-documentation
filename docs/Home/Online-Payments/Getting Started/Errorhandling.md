---
sidebar_position: 3
---

## Error Observer

The **`errorObserver`** will fire when an error occurs anywhere inside the Pay Theory SDK. This is a good place to add any logic that should only be executed when an error occurs.

```jsx
window.paytheory.errorObserver(error => {
    // Logic to respond to errors
})
```
### Callback Argument
The callback will be passed a string indicating what happened in the SDK. The string should start with one of the following error types:

- **`FIELD_ERROR`** : Issue with fields on the DOM when mounting.
- **`NO_TOKEN`** : There was an error fetching the auth token when initializing the SDK.
- **`NO_FIELDS`** : There were no fields found when mounting.
- **`NOT_VALID`** : The fields are not yet valid when trying to submit a transaction or tokenize.
- **`INVALID_PARAM`** : Parameters used to transact or tokenize are not valid parameters.
- **`SESSION_EXPIRED`** : The SDK session has expired and is unable to send messages to Pay Theory.

Most errors will require the user to refresh the page and try again.

The exception to this is the NOT_VALID error which will require the user to change the data in the payment fields until you get a proper response to the valid observer and then you may try and transact or tokenize again.
