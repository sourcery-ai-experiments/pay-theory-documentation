#!/usr/bin/env bash

## Clone the backoffice-api repo
#git clone https://github.com/pay-theory/backoffice-api.git
#
### Copy the graphql api schema to the root of the docusaurus project
#cat backoffice-api/templates/_aws.graphql <(echo) backoffice-api/templates/api.graphql > api.graphql

# Generate the docs
npx docusaurus graphql-to-doc

# Remove generated directives we don't want
rm -rf ./docs/api/api/directives
rm -rf ./docs/api/types/directives

# TODO Remove after testing
npm run start

