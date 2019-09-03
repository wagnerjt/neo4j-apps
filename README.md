# Neo4j Desktop Custom Application Documentation


This starter is boilerplate for (technical) documentation websites optionally accompanied by a blog (you can use it forever you want of course).

# Getting started

```bash
git clone https://github.com/wagnerjt/neo4j-apps
cd neo4j-apps
yarn install
yarn start
```

Visit `http://localhost:8000`.

Edit files in `/content/docs` and see live updates.

# Roadmap

- [ ] Improved typings
- [ ] Improved responsiveness
- [ ] Add Search

# Hosting

In order to host the site the **sites path** needs to be put into gatsby-config.js export object on to the property _pathPrefix_. Then run

```bash
yarn build
```

and copy the content of the public folder to the webspace.

Forked originally from the [gatsby-antd-docs](https://github.com/jannikbuschke/gatsby-antd-docs) starter. If you like this documentation's style, the maintainer is responsive for contributions :).

# License

MIT
