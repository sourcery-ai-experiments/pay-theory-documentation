---
sidebar_position: 1
sidebar_label: 'Pay Theory GraphQL API'
title: ""
---
# Pay Theory GraphQL API

The Pay Theory API is built to use [GraphQL](https://graphql.org/learn/). 

GraphQL is a query language that was used to define the schema for our data set.

This schema is used to outline the data that is available through the API.

To interact with the API, you will post a query to the endpoint.

Here is an example of a query:

```graphql
{
  transactions(
    limit: 3
    ) {
    items {
        
        transaction_id
    }
  }
}
```

and its response:

```js
{
    "data": {
        "transactions": {
            "items": [
                {
                    "transaction_id": "pt-start-paytheorylab-rbdg98004adg"
                },
                {
                    "transaction_id": "pt-start-paytheorylab-rbdgaf004adh"
                },
                {
                    "transaction_id": "pt-start-paytheorylab-rbdgaf004adh:R1"
                }
            ]
        }
    }
}
```

One of the benefits of using GraphQL is that you can be explicit about what data you want to retrieve.

In the query above, we are asking for the transaction_id of the first three transactions. If you wanted more information, you would simply list it in the item list.

```graphql
{
  transactions(
    limit: 1
    ) {
    items {
        transaction_id
        settlement_batch
        status
        full_name
    }
  }
}
```

This query would return the transaction_id, settlement_batch, status, and full_name of the first transaction.

```js
{
    "data": {
        "transactions": {
            "items": [
                {
                    "transaction_id": "pt-start-paytheorylab-rbdg98004adg",
                    "settlement_batch": "23",
                    "status": "SETTLED",
                    "full_name": "John Doe"
                }
            ]
        }
    }
}
```

## Authentication

To authenticate your request, you need to pass an Authorization header with your call.

For a partner the key should have the word partner followed by a semicolon and their secret key:

`Authorization: partner;SECRET_KEY`

For a merchant or system, the key should have their merchant_uid followed by a semicolon and their secret key:

`Authorization: MERCHANT_UID;SECRET_KEY`

**Note:** The secret key is not the same as the API key. You can find your secret key in the Pay Theory Portal under the Settings tab. 

This key should be stored securely and not shared with anyone. It should be used server side, stored in an environment variable, and not embedded in your mobile applications or websites.

## POST GraphQL Query

Queries are then executed by sending POST HTTP requests to the endpoint:

***POST `https://api.PARTNER_NAME.STAGE.com/graphql`***

```commandline
curl --location --request POST 'https://api.PARTNER_NAME.STAGE.com/graphql' 
--header 'Authorization: MERCHANT_UID;SECRET_KEY' 
--header 'Content-Type: application/graphql' 
--data '{"query":"{transactions(limit: 3) { items { transaction_id }}}"}'
```

## Variables

You can choose to pass variables into your query instead of putting them directly into the query string.

```js
const queryString = `query MyQuery($payment_method_query: [QueryPair]!, $direction: MoveDirection = FORWARD, $limit: Int!, $offset: String, $transaction_query: SqlQuery, $offset_id: String) {
    transactions(direction: $direction, limit: $limit, offset: $offset, query: $transaction_query, offset_id: $offset_id) {
        total_row_count
        items {
            status
            transaction_date
            transaction_id
            payment_method(query_list: $payment_method_query) {
                payment_method_id
                last_four
                exp_date
                card_brand
            }
        }
    }
}`
```

A few things to call out in the query above:

- Variables are declared with the `$` symbol and listed in parentheses after the query name.
- When declaring the variables you define the type of the variable after the colon.
- You can make a variable required by including an `!` after the type. See `$payment_method_query: [QueryPair]!`
- You can set a default for a variable if it is not included in the variables object. See `$direction: MoveDirection = FORWARD`

You would then create a variable object to pass in with the call to the API.

```js
const variables = {
    "offset": "ASH79834JIO",
    "limit": 100, 
    "payment_method_query": [
        {
            key: "last_four",
            value: "1234",
            operator: EQUAL
        }
    ]
}
```

The body of the request would then look like this:

```js
const body = {
    query: queryString,
    variables: variables
}
```

## Postman Query Builder

A tool to help build queries is available in [Postman](https://www.postman.com/).

When you launch postman and enter the request URL into the app it will automatically download the schema and populate the query builder.

You can then leverage it to help you build queries, test calls, and download code samples to use in your codebase.

![Postman Example](https://books-ui-assets.s3.amazonaws.com/postman_graphql_tip.png)

1. You can check to see if the schema was fetched and refresh the schema if you expect changes have been made.
2. As you type it will have autocomplete to help you fill in the query.
3. You can click here to download code snippets for the call you have built.

![Postman Code Snippet Tool](https://books-ui-assets.s3.amazonaws.com/postman_code_snippet.png)

In the dropdown at the top, you can select the language you want to download the code snippet in. It has a rather extensive list available for you to choose from.

## Query

Here we will detail how you can build your own queries to pass into the Pay Theory API.

First let's look at a basic query object, then we can break down its parts.

## The Query Object
```graphql
{
    query_list: [
        {
            key: "full_name",
            value: "John Doe",
            operator: EQUAL,
            conjunctive_operator: NONE_NEXT
        }
    ], 
    sort_list: {
        direction: ASC, 
        key: "transfer_date"
    }
}
```

**`query_list`: [QueryPair]**  
A list of query pairs used to build out a query.

**`sort_list`: [SortPair]**  
A list of sort pairs to define how the data should be sorted.

## Query Pair
A query pair is the object to build out a query. There are some required fields and some optional fields.

###### ~ = required

**`key`: String**  
The key to the value you want to query against.

**`operator`: Operator**  
The operator to use to compare the value to the data you are calling. More detail below.

**`value`: String**  
The value to compare the data to. If using the `LIKE` or `NOT_LIKE` operator, this value can contain [wildcard characters](https://www.w3schools.com/sql/sql_wildcards.asp).

**`in_values`: [String]**  
A list of values to compare the data to. This should be used instead of `value` if using the operators `IN` or `NOT_IN`.

**~`conjunctive_operator`: ConjunctiveOperator**  
The conjunctive operator to use to connect the query pair with the next query pair. More detail below.

**`query_group`: [QueryPairs]**  
A list of query pairs to use to build out a nested query.  
A more detailed example is below under the examples section.

### Operators

These operators are case-sensitive. The following are the available operators:

`EQUAL`  
The data is equal to the value.

`NOT_EQUAL`  
The data is not equal to the value.

`LIKE`  
The data is like the value. The value can contain [wildcard characters](https://www.w3schools.com/sql/sql_wildcards.asp).

`NOT_LIKE`  
The data is not like the value. The value can contain [wildcard characters](https://www.w3schools.com/sql/sql_wildcards.asp).

`IN_LIST`  
The data is in the list of values.

`NOT_IN_LIST`  
The data is not in the list of values.

`GREATER_THAN`  
The data is greater than the value.

`GREATER_EQUAL`  
The data is greater than or equal to the value.

`LESS_THAN`  
The data is less than the value.

`LESS_EQUAL`  
The data is less than or equal to the value.

### Conjunctive Operators

These operators are case-sensitive. Conjunctive operators in the same array must match for a query to work.
To mix operators use nested queries with query pairs containing a `query_list`. The following are the available conjunctive operators:

`AND_NEXT`  
The results of the query have to meet all the conditions in the query pair list.

`OR_NEXT`  
The results of the query have to meet one of the conditions in the query pair list.

`NONE_NEXT`  
The final query pair in the list should use this operator since it has nothing to connect to.


## Sort Pair
A sort pair is the object used to tell a query how the data should be sorted.

**~`direction`: String**  
The direction to sort the data. These are case-sensitive.
* `ASC`
    * Begins with the least or smallest and ends with the greatest or largest
* `DESC`
    * Begins with the greatest or largest and ends with the least or smallest

**~`key`: String**  
The key to sort the data by.


## Examples

### Get Settlements With Gross Amount over $10

If you wanted to build a query that looked for any settlements that had a gross_amount over $10 and was sorted by gross_amount in ascending order, you would do the following:

```graphql
{
    settlements(limit: 10, query:
          {
            query_list: [
              {
                key: "gross_amount",
                value: "1000",
                operator: GREATER_THAN,
                conjunctive_operator: NONE_NEXT
              }
            ],
            sort_pair: [{
              direction: ASC,
              key: "gross_amount"
            }]
          }) {
        items {
            currency
            gross_amount
        }
        total_row_count
    }
}
```

### Get Transactions With Status SETTLED and the reference starts with test

If you wanted to build a query that looked for any transactions that had a status of `SETTLED` and the `reference` starts with test, you would do the following:

```graphql
{
  transactions(limit: 5, query: {query_list: [
  {
    key: "reference",
    value: "test%",
    operator: LIKE,
    conjunctive_operator: AND_NEXT
  },
  {
      key: "status",
      value: "SETTLED",
      operator: EQUAL,
      conjunctive_operator: NONE_NEXT
  }
]}) {
    items {
        transaction_id
        reference
        gross_amount
    }
    total_row_count
  }
}
```

### Get Transactions with a nested query
To build nested queries you can use multiple query pairs with at least one containing a `query_group`.
```graphql
{
  transactions(limit: 5, query: {query_list: [
    {
      query_group: [
        {
          key: "status",
          value: "SETTLED",
          operator: EQUAL,
          conjunctive_operator: AND_NEXT
        },
        {
          key: "gross_amount",
          value: "100",
          operator: GREATER_THAN,
          conjunctive_operator: NONE_NEXT
        }

      ],
      conjunctive_operator: OR_NEXT
    },
    {
      key: "gross_amount",
      value: "1000",
      operator: GREATER_THAN,
      conjunctive_operator: NONE_NEXT
    }
  ]}) {
    items {
      full_name
      gross_amount
    }
    total_row_count
  }
}
```

This query would return any transactions where the `status` is SETTLED and the `gross_amount` is greater than 100 or transactions where the `gross_amount` is greater than 1000.

This allows for more advanced queries and for you to group `AND_NEXT` and `OR_NEXT` in a single query.

### Querying Sub Objects

Due to the fact payment method is a nested data object payment method queries be made by passing a separate array of query pairs for the metadata.
```graphql
{
    transactions(limit: 10, query:
          {
            query_list: [
                {
                    key: "gross_amount",
                    value: "1000",
                    operator: GREATER_THAN,
                    conjunctive_operator: NONE_NEXT
                }
            ],
            sort_pair: [{
              direction: ASC,
              key: "gross_amount"
            }]
          } 
          ) {
        items {
            currency
            gross_amount
            payment_method(query_list: [
                {
                    key: "last_four",
                    value: "1234",
                    operator: EQUAL
                }
            ])
        }
        total_row_count
    }
}
```
This would return 10 transactions where the `gross_amount` is greater than 1000 and the payment has a payment method in which `last_four` is equal to 1234. It would be sorted by gross_amount in ascending order.

### Querying On Metadata

Metadata queries work similarly but do not support nested queries using `query_group`.

```graphql
{
    transactions(limit: 10, query:
          {
            query_list: [
                {
                    key: "gross_amount",
                    value: "1000",
                    operator: GREATER_THAN,
                    conjunctive_operator: NONE_NEXT
                }
            ],
            sort_pair: [{
              direction: ASC,
              key: "gross_amount"
            }]
          } 
          ) {
        items {
            currency
            gross_amount
            metadata(query_list: [
                {
                    key:"user_defined_payer_id",
                    value:"1234",
                    operator: EQUAL,
                    conjunctive_operator: NONE_NEXT
                }
            ])
        }
        total_row_count
    }
}
```

This would return 10 transactions where the `gross_amount` is greater than 1000 and the payment has metadata `user_defined_payer_id` is equal to 1234. It would be sorted by gross_amount in ascending order.
