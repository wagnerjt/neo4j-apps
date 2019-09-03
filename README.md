<p align="center">
    <h3 align="center">Neo4j Desktop Applications</h3>
    <p align="center">Documentation and Starter Site</p>
    <p align="center">
        <a href="https://github.com/wagnerjt/neo4j-apps/blob/master/LICENSE"><img src="https://img.shields.io/badge/LICENSE-MIT-blue.svg"></a>
    </p>
</p>

## Why

This repository is to enable developers, data scientists, or any other user to develop, test, and install neo4j desktop custom applications. For more details, check out the [full explanation](https://github.com/wagnerjt/neo4j-apps/tree/master/contents/docs/get-started/why.md)

## Contributing

* _This project is work in progress_ If you would like to contribute, please do get in touch.
* Read [Contributing](https://github.com/wagnerjt/neo4j-apps/tree/master/CONTRIBUTING.md) for guidelines
* Any ideas? Create an issue

## Documentation

### Installation

* Note: if you use npm, you can replace all `yarn` commands with `npm` or `npm run`

```bash
git clone https://github.com/wagnerjt/neo4j-apps
cd neo4j-apps
yarn install
yarn start
```

Visit `http://localhost:8000` for the served content, and `http://localhost:8000/___graphql` for GraphiQL.

The directory structure is broken down in the following way.

```text
contents/docs - All Markdown files
├── get-started
│   ├──  introduction.md
│   └──  why.md
├── react
├── vue
├── angular
src
├── templates - Templates over each markdown
├── anchor.mdx
```

Edit files in `/content/docs` and see live updates.

### Roadmap

* [ ] Improved typings
* [ ] Improved responsiveness
* [ ] Add Search
* [ ] Add Tests
* [ ] Add Content

### Hosting

You can host this website after it is bundled in any static website hosting provider. In order to host the site, the **sites path** needs to be altered in `gatsby-config.js` export object on to the property _pathPrefix_.

Bundling this website is simply

```bash
yarn build
```

and copy the content of the public folder to the webspace.

We use Github Pages to host this application, so you can alter the github page location, and publish it yourself with

```bash
yarn deploy
```

Forked originally from the [gatsby-antd-docs](https://github.com/jannikbuschke/gatsby-antd-docs) starter. If you like this documentation's style, the maintainer is responsive for contributions :).

## License

MIT
