---
title: Deployment Checklist
root: '/docs'
parents: ['Get Started']
---

<h1 align="center">
  Release Checklist
</h1>

Below is a quick checklist of useful items to include and review before each new release of your Graph Application.

## The Checklist

### Target Neo4j Desktop API

Ensure you are targeting the correct range of [Neo4j Desktop APIs](../desktop/api#version-mapping) for compatibility.

### Metadata

Ensure your application's [metadata](https://github.com/neo4j-apps/graph-app-starter#graph-application-metadata) is included! I recommend to always include one, even if all you have is a title.

### Release Notes

Ensure the [release notes](https://github.com/neo4j-apps/graph-app-starter#graph-application-metadata) are included. Inform your users with the awesome work you have invested, and continue your feedback.

### Bundle Structure

The bundle of your SPA needs to be in a specific format. Run your build, and verify that it matches with the [format](https://github.com/neo4j-apps/graph-app-starter#structure).

For additional details, please see the documentation [here](https://github.com/neo4j-apps/graph-app-starter#distribution).
