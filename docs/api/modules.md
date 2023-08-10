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

[pay_theory_types.ts:45](https://github.com/pay-theory/pay-theory-documentation/blob/4e62079/theme/pay_theory_types.ts#L45)

___

### BillingInfo

Ƭ **BillingInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `address?` | [`AddressObject`](modules.md#addressobject) |
| `name?` | `string` |

#### Defined in

[pay_theory_types.ts:72](https://github.com/pay-theory/pay-theory-documentation/blob/4e62079/theme/pay_theory_types.ts#L72)

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

[pay_theory_types.ts:273](https://github.com/pay-theory/pay-theory-documentation/blob/4e62079/theme/pay_theory_types.ts#L273)

___

### CashBarcodeObject

Ƭ **CashBarcodeObject**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `barcodeUrl` | `string` |
| `mapUrl` | `string` |

#### Defined in

[pay_theory_types.ts:125](https://github.com/pay-theory/pay-theory-documentation/blob/4e62079/theme/pay_theory_types.ts#L125)

___

### CashBarcodeResponse

Ƭ **CashBarcodeResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `body` | [`CashBarcodeObject`](modules.md#cashbarcodeobject) |
| `type` | [`CASH`](enums/ResponseMessageTypes.md#cash) |

#### Defined in

[pay_theory_types.ts:130](https://github.com/pay-theory/pay-theory-documentation/blob/4e62079/theme/pay_theory_types.ts#L130)

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

[pay_theory_types.ts:248](https://github.com/pay-theory/pay-theory-documentation/blob/4e62079/theme/pay_theory_types.ts#L248)

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

[pay_theory_types.ts:77](https://github.com/pay-theory/pay-theory-documentation/blob/4e62079/theme/pay_theory_types.ts#L77)

___

### ConfirmationResponse

Ƭ **ConfirmationResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `body` | [`ConfirmationObject`](modules.md#confirmationobject) |
| `type` | [`CONFIRMATION`](enums/ResponseMessageTypes.md#confirmation) |

#### Defined in

[pay_theory_types.ts:86](https://github.com/pay-theory/pay-theory-documentation/blob/4e62079/theme/pay_theory_types.ts#L86)

___

### ErrorResponse

Ƭ **ErrorResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `error` | `string` |
| `type` | [`ERROR`](enums/ResponseMessageTypes.md#error) |

#### Defined in

[pay_theory_types.ts:183](https://github.com/pay-theory/pay-theory-documentation/blob/4e62079/theme/pay_theory_types.ts#L183)

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

[pay_theory_types.ts:111](https://github.com/pay-theory/pay-theory-documentation/blob/4e62079/theme/pay_theory_types.ts#L111)

___

### FailedTransactionResponse

Ƭ **FailedTransactionResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `body` | [`FailedTransactionObject`](modules.md#failedtransactionobject) |
| `type` | [`FAILED`](enums/ResponseMessageTypes.md#failed) |

#### Defined in

[pay_theory_types.ts:120](https://github.com/pay-theory/pay-theory-documentation/blob/4e62079/theme/pay_theory_types.ts#L120)

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

[pay_theory_types.ts:294](https://github.com/pay-theory/pay-theory-documentation/blob/4e62079/theme/pay_theory_types.ts#L294)

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

[pay_theory_types.ts:280](https://github.com/pay-theory/pay-theory-documentation/blob/4e62079/theme/pay_theory_types.ts#L280)

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

[pay_theory_types.ts:214](https://github.com/pay-theory/pay-theory-documentation/blob/4e62079/theme/pay_theory_types.ts#L214)

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

[pay_theory_types.ts:264](https://github.com/pay-theory/pay-theory-documentation/blob/4e62079/theme/pay_theory_types.ts#L264)

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

[pay_theory_types.ts:64](https://github.com/pay-theory/pay-theory-documentation/blob/4e62079/theme/pay_theory_types.ts#L64)

___

### PlaceholderObject

Ƭ **PlaceholderObject**: `Partial`<`Record`<`ElementTypes`, `string`\>\>

#### Defined in

[pay_theory_types.ts:302](https://github.com/pay-theory/pay-theory-documentation/blob/4e62079/theme/pay_theory_types.ts#L302)

___

### StateObject

Ƭ **StateObject**: `Record`<`ElementTypes`, [`FieldState`](modules.md#fieldstate)\>

#### Defined in

[pay_theory_types.ts:300](https://github.com/pay-theory/pay-theory-documentation/blob/4e62079/theme/pay_theory_types.ts#L300)

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

[pay_theory_types.ts:304](https://github.com/pay-theory/pay-theory-documentation/blob/4e62079/theme/pay_theory_types.ts#L304)

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

[pay_theory_types.ts:91](https://github.com/pay-theory/pay-theory-documentation/blob/4e62079/theme/pay_theory_types.ts#L91)

___

### SuccessfulTransactionResponse

Ƭ **SuccessfulTransactionResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `body` | [`SuccessfulTransactionObject`](modules.md#successfultransactionobject) |
| `type` | [`SUCCESS`](enums/ResponseMessageTypes.md#success) |

#### Defined in

[pay_theory_types.ts:106](https://github.com/pay-theory/pay-theory-documentation/blob/4e62079/theme/pay_theory_types.ts#L106)

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

[pay_theory_types.ts:189](https://github.com/pay-theory/pay-theory-documentation/blob/4e62079/theme/pay_theory_types.ts#L189)

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

[pay_theory_types.ts:135](https://github.com/pay-theory/pay-theory-documentation/blob/4e62079/theme/pay_theory_types.ts#L135)

___

### TokenizedPaymentMethodResponse

Ƭ **TokenizedPaymentMethodResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `body` | [`TokenizedPaymentMethodObject`](modules.md#tokenizedpaymentmethodobject) |
| `type` | [`TOKENIZED`](enums/ResponseMessageTypes.md#tokenized) |

#### Defined in

[pay_theory_types.ts:145](https://github.com/pay-theory/pay-theory-documentation/blob/4e62079/theme/pay_theory_types.ts#L145)

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

[pay_theory_types.ts:196](https://github.com/pay-theory/pay-theory-documentation/blob/4e62079/theme/pay_theory_types.ts#L196)
