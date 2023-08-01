---
sidebar_position: 2
---

## Payment Method Token
Payment Method Tokens are meant to store info that represents a tokenized Bank Account, Credit Card, or Debit Card.

Here is how the token object looks like
```jsx
{
    payment_method_id: String
    merchant_uid: String
    payor: Payor
    payment_type: PaymentType
    last_four: String
    exp_date: String
    full_name: String
    }

```

|Key                 |type             |description                                 |
|--------------------|-----------------|--------------------------------------------|     
|` payment_method_id`| String          |The unique payment method id.|
|` merchant_uid`     | String          |The Pay Theory unique identifier assigned to the merchant that the payment_method_token belongs to.|
|`payor`             |PayorObject      |The payor object. Refer to the Payor docs for more info.|
|`payment_type `     |PaymentType      | The type of payment method.<ul><li>CARD</li><li>ACH</li><li>CASH</li></ul>
|` last_four`      | String      | The last four digits of the card or bank account number.|
|` exp_date`  |String       |The expiration date of the card. Null if the payment_type is not a card. Format: MMYY|
|` full_name`|String        |The name on the card or bank account.|



## Query Payment Method Tokens
Tokens are used to reference a payment method and enable transactions rather than managing credit card numbers and bank account information directly.

:::info Query
If you are unfamiliar with query writing, you may learn about fundamental query structure from the information provided below. 

<a href= "../../../tutorial-basics/API/QUERY" class="button button--primary button--lg">Query</a>

:::

```graphql
const GET_PAYMENT_METHOD_TOKENS = gql`
query  paymentMethodTokens(direction: FORWARD, limit: 10, offset: "", offset_id: "", query: QueryObject) {
    items {
        payment_method_id
        merchant_uid
        payor(query_list: [QueryPair]) {
            payor_id
            ...
            }
        payment_type
        last_four
        exp_date
        card_brand
        full_name
    }
    total_row_count
  }
```

|Key                |type             |description                        |
|-------------------|-----------------|-----------------------------------|     
|` limit`       |Int       |The number of payment_method_tokens to return.|
|` direction`   |String     |The direction of the pagination. Make sure the results are returned in the correct order.<ul><li>Forward</li><li>Backward</li></ul> |
| ` offset`     | String     |The value of the offset item for which the list is being sorted.<ul><li>If the direction is FORWARD, the offset item is the last item in the previous list.</li><li>If the direction is BACKWARD, the offset is the first item in the previous list.</li></ul>|
|` offset_id`   |String     |The payment_method_id of the offset item. If the direction is FORWARD, the offset item is the last item in the list. If the direction is BACKWARD, the offset is the first item in the list.|
|` query`       |QueryObject    |The query to filter the payment_method_tokens based on Pay Theory defined data. |

### Nested Arguments
From the above code the nested argument is `payor`

|Key                |type               |description                                               |
|-------------------|-------------------|----------------------------------------------------------|
|`query_list`       |QueryPair      |The set of queries used to filter the payment_method_tokens using Pay Theory-defined information. This will guarantee that only payment_method_tokens matching this query are returned.|

The output below demonstrates that the query was properly executed and that all of the tokens were shown on the console in JSON format.
``` json
{
    "data": {
        "paymentMethodTokens": {
            "items": [
                {
                    "payment_method_id": "pt_pmt_XXXXX",
                },
                {
                    "payment_method_id": "pt_pmt_XXXXX",
                },
              ...
            ],
            "total_row_count": 256
        }
    }
}
```

|Key                |type               |description                                               |
|-------------------|-------------------|----------------------------------------------------------|
|` items`           |PaymentMethodToken     |The list of payment_method_tokens that are returned from the query. Objects will include all keys that are passed in with the query.|
|` total_row_count` |Int         |The total number of payment_method_tokens that match the query. Used to help with pagination.|


## Next Steps

You can also refer to how to make [one time payment Transaction](./Making%20a%20Payment%20with%20Payment%20Token.md)
