import React from 'react';
import { Link } from 'gatsby';
import { Button, Icon, Card, List } from 'antd';

import react from '../images/react-icon.png';
import vue from '../images/vue-icon.png';
import angular from '../images/angular-icon.png';

const data = [
  {
    icon: react,
    framework: 'React',
    link: '/docs/react/introduction',
  },
  {
    icon: vue,
    framework: 'Vue',
    link: '/docs/vue/introduction',
  },
  {
    icon: angular,
    framework: 'Angular',
    link: '/docs/angular/introduction',
  },
];

const FrameworkCard = ({ icon, framework, link }) => (
  <Link to={link}>
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt={framework} src={icon} />}
    >
      <Card.Meta description={framework} />
    </Card>
  </Link>
);

const IndexPage = () => {
  return (
    <div align="center" style={{ padding: 80 }}>
      <p
        style={{
          color: 'cornflowerblue',
          fontSize: '2.5em',
          fontWeight: 'bold',
        }}
      >
        Neo4j Desktop App Docs and Starters
      </p>
      <h2>A gatsby starter to create documentation websites</h2>
      <p>
        This is a fork of{' '}
        <a href="https://github.com/jannikbuschke/gatsby-antd-docs">
          https://github.com/jannikbuschke/gatsby-antd-docs
        </a>
      </p>
      Use your favorite framework
      <br />
      <List
        grid={{ column: data.length, size: 'middle' }}
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <FrameworkCard {...item} />
          </List.Item>
        )}
      />
      <Button.Group size="large">
        <Button href="https://github.com/wagnerjt/neo4j-apps" target="_blank">
          Contribute
          <Icon type="github" />
        </Button>
        <Button type="primary">
          <Link to="/docs/get-started/introduction">Get Started</Link>
        </Button>
      </Button.Group>
    </div>
  );
};

export default IndexPage;
