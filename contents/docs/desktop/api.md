---
title: API
root: '/docs'
parents: ['Neo4j Desktop']
---

<h1 align="center">
  Neo4j Desktop Api
</h1>

# Neo4j Desktop Api

Neo4j Desktop injects an api context, when a graph application is installed on it. It currently appears there are two ways you can get access to the context.

## Neo4j Context

- New Api Method | Subscription with a GraphQL server

```js
// All the necessary information is available in the url, as searchParams
const url = new URL(window.location.href);
// Url of a graphQL endpoint
const apiEndpoint = url.searchParams.get('neo4jDesktopApiUrl');
```

- Previous Method (no deprecation date yet) | Injected in the window.

```js
/**
 * If application can run in multiple environments, detect that we are in Desktop.
 */
if (window.neo4jDesktopApi) {
    // API will be available in global `window` variable `neo4jDesktopApi`.
```

- Note: The communication between Neo4j server and the browser occurs via [websockets](https://neo4j.com/developer/kb/how-neo4j-browser-interacts-with-neo4j-server/).

## Requesting Permissions

The Desktop has a set of permissions that is needed to be accepted on the client's machine before they can be used.

Please see the documentation [here](https://github.com/neo4j-apps/graph-app-starter#requesting-permissions)

## Neo4j Desktop Typescript API

Please see the documentation [here](https://github.com/neo4j-apps/graph-app-starter#reference)

### Version Mapping

Please see the [issue](../issues#api)
