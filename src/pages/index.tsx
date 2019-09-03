import React from 'react'
import { Link } from 'gatsby'
import { Button, Icon } from 'antd'

const IndexPage = () => {
  return (
    <div align="center" style={{ padding: 80 }}>
      <p
        style={{
          color: 'cornflowerblue',
          fontSize: 50,
          fontWeight: 'bold',
        }}
      >
        Gatsby Ant Design Docs Boilerplate
      </p>
      <h2>A gatsby starter to create documentation websites</h2>
      <p>
        This is a fork of{' '}
        <a href="https://github.com/jannikbuschke/gatsby-antd-docs">
          https://github.com/jannikbuschke/gatsby-antd-docs
        </a>
      </p>
      <br />
      <Button.Group size="large">
        <Button
          href="https://github.com/wagnerjt/neo4j-apps"
          target="_blank"
        >
          Contribute
          <Icon type="github" />
        </Button>
        <Button type="primary">
          <Link to="/docs/get-started/introduction">Get Started</Link>
        </Button>
      </Button.Group>
    </div>
  )
}

export default IndexPage
