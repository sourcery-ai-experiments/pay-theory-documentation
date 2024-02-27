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
  plugins: [
    [
        "@graphql-markdown/docusaurus",
        {
            schema: "./api.graphql", // local graphql api schema
            rootPath: "./docs/api", // docs will be generated under (rootPath/baseURL)
            baseURL: "graphql-api", // docs will be generated under (rootPath/baseURL)
            linkRoot: "/docs/api", // adds a link root for the generated docs depending on the rootPath
            printTypeOptions: {
                codeSection: true, // the display section
                deprecated: "default", // deprecated entities are displayed with other entities.
                exampleSection: false, // display example section based on directive data https://graphql-markdown.github.io/docs/advanced/examples/
                parentTypePrefix: false, // disable parent prefix, same as CLI flag --noParentType
                relatedTypeSection: true, // disable related type sections, same as CLI flag --noRelatedType
                typeBadges: false, // disable type attribute badges, same as CLI flag --noTypeBadges
                useApiGroup: true, // disable type API grouping, same as CLI flag --noApiGroup
            },
            loaders: {
                GraphQLFileLoader: "@graphql-tools/graphql-file-loader", // local file schema
            },
        },
    ],
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