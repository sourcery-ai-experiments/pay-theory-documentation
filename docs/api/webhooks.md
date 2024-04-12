---
sidebar_position: 15
sidebar_label: 'Webhooks'
title: "Webhooks"
---

# Webhooks

Webhooks are a way for our system to notify you when an event has occurred.

Let's look at the structure of a webhook object.

## The Webhook Object
This object represents an endpoint on your end that will receive notifications from our system.

```graphql
{
  endpoint: String
  is_active: Boolean
  name: String
}
```

| Key       | Type    | Description                                                |
|-----------|---------|------------------------------------------------------------|
| endpoint  | String  | The URL the event will be sent to.                         |
| is_active | Boolean | Whether the webhook is active and receiving notifications. |
| name      | String  | A user-friendly name for the webhook.                      |

## The Webhook Event Object
A webhook event object represents a webhook trigger, meaning it may have sent a notification to your endpoint if it was active at the time.

```graphql
{
    id: ID
    endpoint: String
    error: String
    event: String
    started_at: String
    finished_at: String
    request: String
    response: String
    status_code: Int
    result: WebhookNotificationResult
}
```

| Key         | Type                      | Description                                                                                        |
|-------------|---------------------------|----------------------------------------------------------------------------------------------------|
| id          | ID                        | A unique ID for the event.                                                                         |
| endpoint    | String                    | The endpoint of the webhook associated with the event.                                             |
| error       | String                    | An error message present only if the event failed.                                                 |
| event       | String                    | The type of event that was sent.                                                                   |
| started_at  | String                    | The time the first request was made.                                                               |
| finished_at | String                    | The time the response was received or the last attempt to contact the endpoint was made.           |
| request     | String                    | A JSON string of the request that was sent to the endpoint.                                        |
| response    | String                    | A JSON string of the response received from the endpoint. Not present if no response was received. |
| status_code | Int                       | The HTTP status code of the last response. Not present if no response was received.                |
| result      | WebhookNotificationResult | The final outcome of the event.                                                                    |

### WebhookNotificationResult

Can be one of the following:

`SUCCESS`  
The notification was successfully received (2xx response) by your endpoint.

`FAILURE`  
The notification was not successfully received (4xx or 5xx response, or no response at all) by your endpoint.

`IGNORED`
The notification was not sent because the webhook was not active.

### Retry Policy

The following is the retry policy for webhooks:

- Notifications will be retried up to **3** times if the endpoint fails to respond.
- The delay between retries will increase with each attempt.
- The maximum timeout for a notification is **10 seconds**.
- If the endpoint fails to respond after the third attempt, the webhook will be deactivated, and further notifications will be marked as `IGNORED`, no longer calling the endpoint.

## Webhook Events Query
This is the query definition for the `WebhookEvents` object:

```graphql
webhookEvents(id: ID, endpoint: String, result: WebhookNotificationResult, last_evaluated_key: String, limit: Int): WebhookEvents!
```

***Parameters***
|Key                |type         |       description                     |
|-------------------|-------------|---------------------------------------|
|id                 |ID           |The ID of the event to retrieve.|
|endpoint           |String       |The endpoint of the webhook associated with the event.|
|result             |WebhookNotificationResult|The result of the event.|
|last_evaluated_key |String       |The last evaluated key for pagination.|
|limit              |Int          |The maximum number of events to return.|

The object `WebhookEvents` consists of the following fields:

```graphql
{
  events: [WebhookEvent]!
  last_evaluated_key: String
}
```

| Key                | Type           | Description                            |
|--------------------|----------------|----------------------------------------|
| events             | [WebhookEvent] | A list of webhook events.              |
| last_evaluated_key | String         | The last evaluated key for pagination. |

## Examples

### Creating a Webhook
To create a webhook, you need to provide the endpoint and a name for the webhook using the following mutation:

```graphql
mutation {
  createWebhook(endpoint: "https://example.com/webhook", name: "Example Webhook") {
    success
  }
}
```

### Listing Webhooks
To list all webhooks, you can use the following query:

```graphql
{
  webhooks {
    endpoint
    is_active
    name
  }
}
```

If you want to get a specific webhook, you can pass the endpoint as an argument:

```graphql
{
  webhooks(endpoint: "https://example.com/webhook") {
    is_active
    name
  }
}
```

### Updating a Webhook
To update a webhook, you can use a mutation like the following:

```graphql
mutation {
  updateWebhook(endpoint: "https://example.com/webhook", name: "Updated Webhook", is_active: false) {
    success
  }
}
```

> **Note:** Not passing a field will leave it unchanged; the webhook endpoint (URL) cannot be changed.

### Deleting a Webhook
To delete a webhook, you can use the following mutation:

```graphql
mutation {
  deleteWebhook(endpoint: "https://example.com/webhook") {
    success
  }
}
```

### Listing Webhook Events

To list all webhook events, you can use the following query:

```graphql
{
  webhookEvents {
    events {
      id
      endpoint
      error
      event
      started_at
      finished_at
      request
      response
      status_code
      result
    }
  }
}
```

If you want to get a specific webhook event, you can pass the event ID as an argument:

```graphql
{
  webhookEvents(id: "123456") {
    events {
      endpoint
      error
      event
      started_at
      finished_at
      request
      response
      status_code
      result
    }
  }
}
```

You can also filter by the endpoint, result, or limit the number of events returned:

```graphql
{
  webhookEvents(endpoint: "https://example.com/webhook", result: SUCCESS, limit: 10) {
    events {
      id
      endpoint
      error
      event
      started_at
      finished_at
      request
      response
      status_code
      result
    }
  }
}
```

If you have more events than the limit, you can use the `last_evaluated_key` to paginate through the results:

```graphql
{
  webhookEvents(last_evaluated_key: "123456", limit: 10) {
    events {
      id
      endpoint
      error
      event
      started_at
      finished_at
      request
      response
      status_code
      result
    }
    last_evaluated_key
  }
}
```

## Webhook Payloads

You can expect webhooks for the following events:

- [Authorization](#authorization)
- [Dispute](#dispute)
- [Merchant](#merchant)
- [Payment Method](#payment-method)
- [Payor](#payor)
- [Settlement](#settlement)
- [Transaction](#transaction)

The payload for each event will contain the following values:

| Key     | Type   | Description                                                                                                                                                  |
|---------|--------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| event   | String | The type of event that was sent. Should be one of the following: `AUTHORIZATION`, `DISPUTE`, `MERCHANT`, `PAYMENT`, `PAYMENT_METHOD`, `PAYOR`, `SETTLEMENT`. |
| subtype | String | The subtype of the event. Should be either `CREATED` or `UPDATED`                                                                                            |
| payload | Object | The payload of the event. Examples of the payload for each event are below.                                                                                  |

### Authorization

This is a subset of the [authorization object](authorization.md#the-authorization-object)

```graphql
{
  account_code
  additional_purchase_data {
    level3_data_summary {
      dest_postal_code
      discnt_amt
      duty_amt
      frght_amt
      order_num
      prod_desc
      purch_idfr
      tax_amt
      tax_ind
    }
  }
  amount
  authorization_date
  authorization_id
  captured_amount
  currency
  device_id
  expiration_date
  failure_reasons
  fee_mode
  fees
  invoice {
    account_code
    created_date
    currency
    due_by
    fee_mode
    invoice_amount
    invoice_date
    invoice_description
    invoice_id
    invoice_name
    merchant_invoice_number
    merchant_uid
    metadata
    payor {
      address_line1
      address_line2
      city
      country
      email
      full_name
      merchant_uid
      metadata
      payor_id
      phone
      postal_code
      region
    }
    reference
    settings {
      is_secure
      require_payor_address
      security_pin
    }
    status
    total_paid_amount
  }
  merchant_uid
  metadata
  payment_method {
    address_line1
    address_line2
    card_brand
    city
    country
    exp_date
    full_name
    is_active
    last_four
    merchant_uid
    metadata
    payment_method_id
    payment_type
    payor {
      address_line1
      address_line2
      city
      country
      email
      full_name
      merchant_uid
      metadata
      payor_id
      phone
      postal_code
      region
    }
    postal_code
    region
    wallet_type
  }
  reference
  sale_id
  status
  timezone
  transaction_id
  updated_row_at
}
```

### Dispute

This is a subset of the [dispute object](dispute.md#the-dispute-object)

```graphql
{
  amount
  dispute_date
  dispute_id
  evidence_last_send_date
  expiration_date
  merchant_uid
  status
  reason
  reason_message
  settlement_deposit_batch
  settlement_withdrawal_batch
  updated_date
  updated_row_at
  transaction {
    account_code
    authorization_id
    currency
    device_id
    dispute_status
    fee_mode
    fees
    is_settled
    gross_amount
    merchant_uid
    metadata
    net_amount
    parent_id
    reference
    refund_voidable
    refunded_amount
    sale_id
    settlement_batch
    status
    timezone
    transaction_date
    transaction_id
    transaction_type
    updated_row_at
  }
}
```

### Merchant

This is a subset of the [merchant object](merchant.md#the-fee-matrix-object)

```graphql
{
    ach_active
    api_key
    card_active
    cash_active
    is_system
    merchant_name
    merchant_uid
    parent_merchant_uid
    settings {
        contact_email
        contact_phone
        facebook
        instagram
        linkedin
        tiktok
        twitter
        website
    }
    submitted_onboarding
}
```

### Payment Method

This is a subset of the [payment method object](payment_method_token.md#the-payment-method-token-object)

```graphql
{
  address_line1
  address_line2
  card_brand
  city
  country
  exp_date
  full_name
  is_active
  last_four
  merchant_uid
  metadata
  payment_method_id
  payment_type
  postal_code
  region
  wallet_type
  payor {
    address_line1
    address_line2
    city
    country
    email
    full_name
    merchant_uid
    metadata
    payor_id
    phone
    postal_code
    region
  }
}
```

### Payor

This is a subset of the [payor object](payor.md#the-payor-object)

```graphql
{
    address_line1
    address_line2
    city
    country
    email
    full_name
    merchant_uid
    metadata
    payor_id
    phone
    postal_code
    region
}
```

### Settlement

This is a subset of the [settlement object](settlement.md#the-settlement-object)

```graphql
{
    currency
    gross_amount
    gross_amount_64bit
    merchant_uid
    net_amount
    net_amount_64bit
    settlement_batch
    settlement_date
    status
    total_adjustments
    total_adjustments_64bit
    total_fees
    total_fees_64bit
    transaction_debit_count
    transaction_dispute_count
    transaction_reversal_count
    transfer_date
    updated_row_at
}
```

### Transaction

This is a subset of the [transaction object](transaction.md#the-transaction-object)

```graphql
{
    account_code
    ach_return_details {
        return_code
        return_details
        transfer_type
    }
    additional_purchase_data {
        level3_data_summary {
            dest_postal_code
            discnt_amt
            duty_amt
            frght_amt
            order_num
            prod_desc
            purch_idfr
            tax_amt
            tax_ind
        }
    }
    authorization_id
    currency
    device_id
    dispute_status
    failure_reasons
    fee_mode
    fees
    gross_amount
    invoice {
        account_code
        created_date
        currency
        due_by
        fee_mode
        invoice_amount
        invoice_date
        invoice_description
        invoice_id
        invoice_name
        merchant_invoice_number
        merchant_uid
        metadata
        payor {
            address_line1
            address_line2
            city
            country
            email
            full_name
            merchant_uid
            metadata
            payor_id
            phone
            postal_code
            region
        }
        reference
        settings {
            accepted_payment_methods {
                ach
                card
                cash
            }
            is_secure
            require_payor_address
        }
        status
        total_paid_amount
    }
    is_settled
    merchant_uid
    metadata
    net_amount
    parent_id
    payment_method {
        address_line1
        address_line2
        card_brand
        city
        country
        exp_date
        full_name
        is_active
        last_four
        merchant_uid
        metadata
        payment_method_id
        payment_type
        payor {
            address_line1
            address_line2
            city
            country
            email
            full_name
            merchant_uid
            metadata
            payor_id
            phone
            postal_code
            region
        }
        postal_code
        region
        wallet_type
    }
    recurring {
        account_code
        amount_per_payment
        created_date
        currency
        fee_mode
        fee_per_payment
        is_active
        is_processing
        merchant_uid
        metadata
        mute_all_emails
        next_payment_date
        payment_interval
        payment_method {
            address_line1
            address_line2
            card_brand
            city
            country
            exp_date
            full_name
            is_active
            last_four
            merchant_uid
            metadata
            payment_method_id
            payment_type
            payor {
                address_line1
                address_line2
                city
                country
                email
                full_name
                merchant_uid
                metadata
                payor_id
                phone
                postal_code
                region
            }
            postal_code
            region
            wallet_type
        }
        payor {
            address_line1
            address_line2
            city
            country
            email
            full_name
            merchant_uid
            metadata
            payor_id
            phone
            postal_code
            region
        }
        prev_payment_date
        recurring_description
        recurring_id
        recurring_name
        reference
        remaining_payments
        status
        total_amount_per_payment
    }
    reference
    refund_reason {
        reason_code
        reason_details
    }
    refund_voidable
    refunded_amount
    sale_id
    settlement_batch
    status
    timezone
    transaction_date
    transaction_id
    transaction_type
    updated_row_at
}
```