---
sidebar_position: 15
sidebar_label: 'Webhooks'
title: ""
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

**Parameters**
|Key                |type         |       description                     |
|-------------------|-------------|---------------------------------------|
|endpoint           |String       |The URL the event will be sent to.|
|is_active          |Boolean      |Whether the webhook is active and receiving notifications.|
|name               |String       |A user-friendly name for the webhook.|

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

***Parameters***
|Key                |type         |       description                     |
|-------------------|-------------|---------------------------------------|
|id                 |ID           |A unique ID for the event.|
|endpoint           |String       |The endpoint of the webhook associated with the event.|
|error              |String       |An error message present only if the event failed.|
|event              |String       |The type of event that was sent.|
|started_at         |String       |The time the first request was made.|
|finished_at        |String       |The time the response was received or the last attempt to contact the endpoint was made.|
|request            |String       |A JSON string of the request that was sent to the endpoint.|
|response           |String       |A JSON string of the response received from the endpoint. Not present if no response was received.|
|status_code        |Int          |The HTTP status code of the last response. Not present if no response was received.|
|result             |WebhookNotificationResult|The final outcome of the event.|

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

**`events`: [WebhookEvent]**
A list of webhook events.

**`last_evaluated_key`: String**
The last evaluated key for pagination.

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
