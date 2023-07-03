---
sidebar_position: 2
---

## Styling Pay Theory Fields
To style the input parent div simply provide your own CSS for the pay theory containers you create. This is best used to style the height, width, and border of the container.

Individual pay-theory-credit-card-number containers should be at least 340px wide, pay-theory-credit-card combined input should be 400px.

```jsx
#pay-theory-credit-card-number,
#pay-theory-credit-card-exp,
#pay-theory-credit-card-cvv {
  height: 1.75em;
  border: solid 1px #ccc;
  border-radius: 5px;
  margin: 4px 0;
}
 ```

To style the input fields you can pass in a custom style object to the create function in our SDK. This allows you to style the text inside the inputs as well as the style of the radio buttons for the ACH account type.

- `default`: (Object) The way a text field looks when it is not in state success or error.
- `success`: (Object) The way a text field looks when it is valid. Only applies to fields that go through validation.
- `error`: (Object) The way a text field looks when it is invalid. Only applies to fields that go through validation.
- ` radio`: (Object) The way radio buttons looks for the ACH account type.
  - ` width `: (Int) The width in pixels of the radio buttons.
  - ` fill`: (String) The color of the radio buttons.
  - ` stroke`: (String) The color of the radio buttons border.
  - ` text`: (Object) This style object will be used to style the labels for the radio buttons.
- ` hidePlaceholder` : (Boolean) that allows you to hide the placeholder text in the input fields.

```jsx
const STYLES = {
    default: {
        color: 'black',
        fontSize: '14px'
    },
    success: {
        color: '#5cb85c',
        fontSize: '14px'
    },
    error: {
        color: '#d9534f',
        fontSize: '14px'
    },
    radio: {
          width: 18,
          fill: "blue",
          stroke: "grey",
          text: {
            fontSize: "18px",
            color: "grey"
          }
    },
    hidePlaceholder: false
}
 ```

