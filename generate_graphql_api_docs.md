# Generate GraphQL API Docs

## What
Generate API documentation from GraphQL schema using recommendation by docusaurus graphql-markdown https://github.com/graphql-markdown/graphql-markdown

## How
1. Install graphql-markdown
```bash
npm install @graphql-markdown/docusaurus graphql
```

2. Install graphql-config
```bash
npm install graphql-config
```

3. Add the following to plugins `docusaurus.config.js`
```javascript
    [
    "@graphql-markdown/docusaurus",
    {
        schema: "./schema/api.graphql",
        rootPath: "./docs", // docs will be generated under './docs/swapi' (rootPath/baseURL)
        baseURL: "api",
        // homepage: "./docs/api.md",
        loaders: {
            GraphQLFileLoader: "@graphql-tools/graphql-file-loader", // local file schema
        },
    },
    ]
```

4. Run the following command to generate the API documentation
```bash
npx docusaurus graphql-to-doc
```

5. Add the following to `sidebars.js`
```javascript
module.exports = {
    docsSidebar: [
        // ... your site's sidebar
    ],
    ...require("./docs/swapi/sidebar-schema.js"),
};
```