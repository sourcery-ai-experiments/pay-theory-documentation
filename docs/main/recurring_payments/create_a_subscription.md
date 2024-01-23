---
sidebar_position: 2
sidebar_label: Create Recurring Payment
title: ""

---

<!-- Guide Coming Soon

## API Link
* [Create Recurring Payment](../../api/recurring#create-recurring-payment) -->


import Tabs from '../../../components/Tabs';
import TabItem from '@theme/TabItem';
import Admonition from '@theme/Admonition';

<Tabs
  defaultValue="javascript"
  values={[
    {label: 'Javascript', value: 'javascript'},
    {label: 'Apple', value: 'apple'},
    {label: 'Android', value: 'android'},
  ]}>
  
  <TabItem value="javascript">

# Create Recurring Payments
Recurring payments are payments that get triggered on a specified interval. can be used to create subscriptions, and payment plans and other use cases where you want to  This guide will show you how to create a payment plan and a subscription. 

:::danger Before you start
You will need to be able to tokenize a payment in order to set up a recurring payment. 

<a href= "../../online_payments/tokenizing/quickstart" class="button button--primary button--md">Tokenizing Quickstart</a>
:::

## Setting up a your recurring payment

### 1. Setting up a Payment Plan

### 2. A

## Creating a payment plan

### 1. Tokenize a payment method 

### 2. Creating a recurring payment
```graphql
mutation {
  createRecurringPayment(input: {
            account_code: String, 
            amount: Int, 
            currency: String, 
            fee_mode: FEE_MODE, 
            merchant_uid: String, 
            metadata: JSON, 
            payment_interval: PAYMENT_INTERVAL, 
            payment_method_id: String, 
            payor_id: String, 
            payor: Payor, 
            mute_all_emails: Boolean
        })
```
#### Arguments

Key
Description
createRecurringPayment
This object contains all the details needed to create a recurring payment.


#### Required Arguments

Key
Type
Description
`merchant_uid`
String
The Pay Theory merchant is a unique identifier for the merchant that is creating the recurring payment.
`amount`
Int
The amount of the recurring payment.
`payment_interval`
Payment_Interval
The interval of the recurring payment. The following intervals are available:
Weekly
Bi_Weekly
Monthly
Quarterly
Bi_Annual
Annual


`payment_method_id`
String
The `payment_method_id` of the tokenized payment method that will be used for the recurring payment.
`payor_id`
String
The `payor_id` of the payor that the recurring payment will be tied to.
`payor`
Payor
The payor object that the recurring payment will be tied to. This will create a new payor in the system


####Optional Arguments

Key
Type
Description
`account_code`
String
Custom account code for the recurring payment that will be tied to each payment.
`currency`
String
The currency of the recurring payment. If not provided, the currency will default to 'USD'.
`metadata`
JSON
Custom metadata for the recurring payment that will be tied to each payment.
`mute_all_emails`
Boolean
If set to true, no emails will be sent to the payor for this recurring payment. Default is false.



### Returns
The call will return the newly created recurring payment.

```json
{
    "data": {
        "createRecurringPayment": {
            ...recurring_payment_object
        }
    }
}
```

## Next Steps
We always have the option to update any information[Update Information] pertaining to recurring payments as well as cancel the recurring payments[Cancel].




</TabItem>
  <TabItem value="apple">

# Documentation Coming Soon
Our Apple SDK is fully functional. If you would like to implement our Apple SDK select the link below for more information.
<a href= "../../sdk/apple/main" class="button button--primary button--md">View Apple SDK Reference</a>

  </TabItem>

  <TabItem value="android">

# Documentation Coming Soon
Our Android SDK is fully functional. If you would like to implement our Android SDK select the link below for more information.
<a href= "../../sdk/android/main" class="button button--primary button--md">View Android SDK Reference</a>

  </TabItem>

</Tabs>






