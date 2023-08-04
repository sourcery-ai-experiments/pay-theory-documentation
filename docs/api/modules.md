---
id: "modules"
title: "my-website"
sidebar_label: "Exports"
sidebar_position: 0.5
custom_edit_url: null
---

## Enumerations

- [AcceptedPaymentMethods](enums/AcceptedPaymentMethods.md)
- [ButtonColor](enums/ButtonColor.md)
- [CallToAction](enums/CallToAction.md)
- [ErrorType](enums/ErrorType.md)
- [ResponseMessageTypes](enums/ResponseMessageTypes.md)

## Type Aliases

### AddressObject

Ƭ **AddressObject**: `Object`

Represents an address object with optional properties.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `city?` | `string` |
| `country?` | `string` |
| `line1?` | `string` |
| `line2?` | `string` |
| `postal_code?` | `string` |
| `region?` | `string` |

#### Defined in

___

### BillingInfo

Ƭ **BillingInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `address?` | [`AddressObject`](modules.md#addressobject) |
| `name?` | `string` |

#### Defined in

___

### ButtonStyle

Ƭ **ButtonStyle**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `callToAction` | [`CallToAction`](enums/CallToAction.md) |
| `color` | [`ButtonColor`](enums/ButtonColor.md) |
| `height` | `number` |
| `pill` | `boolean` |

#### Defined in

___

### CashBarcodeObject

Ƭ **CashBarcodeObject**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `barcodeUrl` | `string` |
| `mapUrl` | `string` |

#### Defined in

___

### CashBarcodeResponse

Ƭ **CashBarcodeResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `body` | [`CashBarcodeObject`](modules.md#cashbarcodeobject) |
| `type` | [`CASH`](enums/ResponseMessageTypes.md#cash) |

#### Defined in

___

### CheckoutDetails

Ƭ **CheckoutDetails**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `acceptedPaymentMethods?` | [`AcceptedPaymentMethods`](enums/AcceptedPaymentMethods.md) |
| `accountCode?` | `string` |
| `amount` | `number` |
| `callToAction?` | [`CallToAction`](enums/CallToAction.md) |
| `feeMode?` | typeof `MERCHANT_FEE` \| typeof `SERVICE_FEE` |
| `invoiceId?` | `string` |
| `metadata?` | { `[keys: string \| number]`: `string` \| `number` \| `boolean`;  } |
| `paymentDescription?` | `string` |
| `paymentName` | `string` |
| `paymentParameters?` | `string` |
| `payorId?` | `string` |
| `recurringId?` | `string` |
| `requirePhone?` | `boolean` |

#### Defined in

___

### ConfirmationObject

Ƭ **ConfirmationObject**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `amount` | `number` |
| `brand` | `string` |
| `first_six` | `string` |
| `last_four` | `string` |
| `receipt_number` | `string` |
| `service_fee` | `number` |

#### Defined in

___

### ConfirmationResponse

Ƭ **ConfirmationResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `body` | [`ConfirmationObject`](modules.md#confirmationobject) |
| `type` | [`CONFIRMATION`](enums/ResponseMessageTypes.md#confirmation) |

#### Defined in

___

### ErrorResponse

Ƭ **ErrorResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `error` | `string` |
| `type` | [`ERROR`](enums/ResponseMessageTypes.md#error) |

#### Defined in

___

### FailedTransactionObject

Ƭ **FailedTransactionObject**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `brand` | `string` |
| `last_four` | `string` |
| `payor_id` | `string` |
| `receipt_number` | `string` |
| `state` | `string` |
| `type` | `string` |

#### Defined in

___

### FailedTransactionResponse

Ƭ **FailedTransactionResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `body` | [`FailedTransactionObject`](modules.md#failedtransactionobject) |
| `type` | [`FAILED`](enums/ResponseMessageTypes.md#failed) |

#### Defined in

___

### FieldState

Ƭ **FieldState**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `errorMessages` | `string`[] |
| `isDirty` | `boolean` |
| `isFocused` | `boolean` |

#### Defined in

___

### PayTheoryButtonInput

Ƭ **PayTheoryButtonInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `apiKey` | `string` |
| `checkoutDetails` | [`CheckoutDetails`](modules.md#checkoutdetails) |
| `onBarcode` | (`result`: [`CashBarcodeObject`](modules.md#cashbarcodeobject)) => `void` |
| `onCancel` | () => `void` |
| `onClick` | () => `void` |
| `onError` | (`error`: `string`) => `void` |
| `onReady` | (`ready`: ``true``) => `void` |
| `onSuccess` | (`result`: [`SuccessfulTransactionObject`](modules.md#successfultransactionobject)) => `void` |
| `style` | [`ButtonStyle`](modules.md#buttonstyle) |

#### Defined in

___

### PayTheoryPaymentFieldsInput

Ƭ **PayTheoryPaymentFieldsInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `apiKey` | `string` |
| `elementIds?` | typeof `defaultElementIds` |
| `feeMode?` | typeof `MERCHANT_FEE` \| typeof `SERVICE_FEE` |
| `metadata?` | { `[key: string \| number]`: `string` \| `number` \| `boolean`;  } |
| `placeholders?` | [`PlaceholderObject`](modules.md#placeholderobject) |
| `session?` | `string` |
| `styles?` | [`StyleObject`](modules.md#styleobject) |

#### Defined in

___

### PayTheoryQRInput

Ƭ **PayTheoryQRInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `apiKey` | `string` |
| `checkoutDetails` | [`CheckoutDetails`](modules.md#checkoutdetails) |
| `onError` | (`error`: `string`) => `void` |
| `onReady` | (`ready`: ``true``) => `void` |
| `onSuccess` | (`result`: [`SuccessfulTransactionObject`](modules.md#successfultransactionobject)) => `void` |
| `size` | `number` |

#### Defined in

___

### PayorInfo

Ƭ **PayorInfo**: `Object`

Represents information about a payor.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `email?` | `string` |
| `first_name?` | `string` |
| `last_name?` | `string` |
| `personal_address?` | [`AddressObject`](modules.md#addressobject) |
| `phone?` | `string` |

#### Defined in

___

### PlaceholderObject

Ƭ **PlaceholderObject**: `Partial`<`Record`<`ElementTypes`, `string`\>\>

#### Defined in

___

### StateObject

Ƭ **StateObject**: `Record`<`ElementTypes`, [`FieldState`](modules.md#fieldstate)\>

#### Defined in

___

### StyleObject

Ƭ **StyleObject**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `default` | `object` |
| `error` | `object` |
| `hidePlaceholder?` | `boolean` |
| `radio?` | { `fill`: `string` ; `stroke`: `string` ; `text`: { `color`: `string` ; `fontSize`: `string`  } ; `width`: `number`  } |
| `radio.fill` | `string` |
| `radio.stroke` | `string` |
| `radio.text` | { `color`: `string` ; `fontSize`: `string`  } |
| `radio.text.color` | `string` |
| `radio.text.fontSize` | `string` |
| `radio.width` | `number` |
| `success` | `object` |

#### Defined in

___

### SuccessfulTransactionObject

Ƭ **SuccessfulTransactionObject**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `amount` | `number` |
| `brand` | `string` |
| `created_at` | `string` |
| `last_four` | `string` |
| `metadata` | { `[keys: string \| number]`: `string` \| `number` \| `boolean`;  } |
| `payment_method_id` | `string` |
| `payor_id` | `string` |
| `receipt_number` | `string` |
| `service_fee` | `number` |
| `state` | `string` |
| `tags` | { `[keys: string \| number]`: `string` \| `number` \| `boolean`;  } |

#### Defined in

___

### SuccessfulTransactionResponse

Ƭ **SuccessfulTransactionResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `body` | [`SuccessfulTransactionObject`](modules.md#successfultransactionobject) |
| `type` | [`SUCCESS`](enums/ResponseMessageTypes.md#success) |

#### Defined in

___

### TokenizeProps

Ƭ **TokenizeProps**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `billingInfo?` | [`BillingInfo`](modules.md#billinginfo) |
| `metadata?` | { `[keys: string \| number]`: `string` \| `number` \| `boolean`;  } |
| `payorId?` | `string` |
| `payorInfo?` | [`PayorInfo`](modules.md#payorinfo) |

#### Defined in

___

### TokenizedPaymentMethodObject

Ƭ **TokenizedPaymentMethodObject**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `brand` | `string` |
| `expiration` | `string` |
| `last_four` | `string` |
| `metadata` | { `[keys: string \| number]`: `string` \| `number` \| `boolean`;  } |
| `payment_method_id` | `string` |
| `payment_type` | ``"card"`` \| ``"ach"`` |
| `payor_id` | `string` |

#### Defined in

___

### TokenizedPaymentMethodResponse

Ƭ **TokenizedPaymentMethodResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `body` | [`TokenizedPaymentMethodObject`](modules.md#tokenizedpaymentmethodobject) |
| `type` | [`TOKENIZED`](enums/ResponseMessageTypes.md#tokenized) |

#### Defined in

___

### TransactProps

Ƭ **TransactProps**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `accountCode?` | `string` |
| `amount` | `number` |
| `billingInfo?` | [`BillingInfo`](modules.md#billinginfo) |
| `confirmation?` | `boolean` |
| `fee?` | `number` |
| `feeMode?` | typeof `MERCHANT_FEE` \| typeof `SERVICE_FEE` |
| `invoiceId?` | `string` |
| `metadata?` | { `[keys: string \| number]`: `string` \| `number` \| `boolean`;  } |
| `paymentParameters?` | `string` |
| `payorId?` | `string` |
| `payorInfo?` | [`PayorInfo`](modules.md#payorinfo) |
| `receiptDescription?` | `string` |
| `recurringId?` | `string` |
| `reference?` | `string` |
| `sendReceipt?` | `boolean` |

#### Defined in