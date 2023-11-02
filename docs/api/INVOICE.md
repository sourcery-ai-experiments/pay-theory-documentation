---
sidebar_position: 9
sidebar_label: 'Invoice'
title: ""
---

# Invoice

Invoices are used to create a payment request that can be sent to a payor. 

## The Invoice Object

```js
{
    account_code: String
    created_date: AWSDateTime
    currency: String
    due_by: AWSDate
    fee_mode: FeeMode
    invoice_amount: Int
    invoice_description: String
    invoice_id: String
    invoice_date: AWSDate
    invoice_name: String
    is_secure: Boolean
    merchant_uid: String
    merchant_invoice_number: String
    metadata: AWSJSON
    offline_transactions: [OfflineTransaction]
    payor: Payor
    reference: String
    require_payor_address: Boolean
    security_pin: String
    settings: InvoiceSettings
    status: InvoiceStatus
    total_paid_amount: Int
}
```

**`account_code`: String**  
A custom value that will be passed on to the transaction when a payment is made through Pay Theory's hosted checkout.

**`created_date`: String**  
The date the invoice was created.

**`currency`: String**  
The currency of the payment that will be used to pay the invoice.

**`due_by`: String**  
The date that the payor is expected to pay the invoice by.

**`fee_mode`: FeeMode**  
The fee mode that will be used on that transaction when a payment is made through Pay Theory's hosted checkout. It can be one of the following:
* `MERCHANT_FEE`
* `SERVICE_FEE`

**`invoice_amount`: Int**  
The total amount of the invoice.

**`invoice_description`: String**  
A brief description of the invoice. This will show up on the hosted checkout page and any email communications about the Invoice.

**`invoice_id`: String**  
The Pay Theory unique identifier for the invoice.

**`invoice_date`: String**  
The initial date for the Invoice.

**`invoice_name`: String**  
The name of the invoice. This will show up on the hosted checkout page and any email communications about the Invoice.

**`is_secure`: Boolean**  
A boolean value that determines if the invoice is secure. If the invoice is secure, the payor will be required to enter a security pin to access the Pay Theory hosted checkout page.

**`merchant_uid`: String**  
The Pay Theory unique identifier for the merchant that the invoice belongs to.

**`merchant_invoice_number`: String**  
A custom value that can be used to tie the Pay Theory Invoice to a merchant's internal invoice number.

**`metadata: AWSJSON`**  
A JSON object that can be used to store custom data about the invoice.

**`offline_transactions`: [OfflineTransaction](offline-transaction)**  
A list of offline transactions that have been applied to the invoice. This is used to track payments that are made outside Pay Theory toward an Invoice.

**`payor`: [Payor](payor)**  
The payor object for the payor that the invoice belongs to. More information on the payor object can be found [here](payor).

**`reference`: String**  
A custom value that will be passed on to the transaction when a payment is made through Pay Theory's hosted checkout.

**`require_payor_address`: Boolean**  
A boolean value that determines if the payor's address is required to pay the invoice through Pay Theory's hosted checkout.

**`security_pin`: String**  
The security pin that is required to access the Pay Theory hosted checkout page if the invoice is secure.

**`settings`: [InvoiceSettings](invoice-settings)**  
The settings object to configure settings for the Pay Theory hosted checkout page.
* `accepted_payment_methods`: AcceptedPaymentMethods
  * 
