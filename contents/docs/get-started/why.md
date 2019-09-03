---
title: Why?
root: '/docs'
parents: ['Get Started']
---

<h1 align="center">
  Why?
</h1

## Overview

This website's mission is to help any Neo4j user, whether they are a developer, tester, architect, or non technical person find all things related to neo4j desktop custom applications.

## Neo4j Desktop Ecosystem

[Neo4j Desktop Application](https://github.com/neo4j/neo4j-browser).

In the ecosystem today there are the following

- Neo4j Browser (the frontend developer IDE) which is shipped with every Neo4j installation and embedded in the official Docker image
- [GraphGists](https://neo4j.com/graphgists/) which are really great for reuse of datasets for blogs and educational purposes.
- Neo4j custom applications which are custom single page applications integrated with Neo4j Desktop
  - Ex: Bloom, Neo4j-ETL, Halin, etc.
- [Neo4j Graph Gallery](https://install.graphapp.io/) - A collection of those Neo4j custom applications

## Once Upon A Time

In my opinion, the [Neo4j Desktop Application](https://github.com/neo4j/neo4j-browser) is such a wonderful extension that enhances any Neo4j experience. I think this tool is so crucial to introduce the labeled-property graph concept because it is a full-fledged integrated IDE and visualization tool. Adoption tends to occur when the tooling is nice :)

In my free time, I wanted to contribute to the Neo4j ecosystem. I discovered these custom applications, and wanted to contribute. So I did some digging, and found some documentation, repositories, and other goodies to get started. However, I really found three pieces of information that was useful, without digging much further into code.

First, I wanted to know how to use the developer tools within the Neo4j Desktop. I stumbled across the [graph-app-starter](https://github.com/neo4j-apps/graph-app-starter), to find some very useful information which got me started. However, I was very lost trying to understand how the Neo4j context was making connections and maintaining its state, so I took to the github organization of the repo, [Neo4j Apps](https://github.com/neo4j-apps). I found some repositories, most of which were weren't touched within the year, or public issue repositories for Neo4j's custom applications like Bloom and ETL. I found the only documentation I could find, which was the architecture of how custom Graph Apps, the neo4j context, on Neo4j desktop [here](https://neo4j-apps.github.io/). Lastly, there was another awesome repo, which was a very detailed how to [create a custom application with pure vanilla javascript article](https://graphaware.com/neo4j/2019/07/25/desktop-graph-apps.html). After doing some small tweaks to get my foot in the door, to see what this Graph App was really about, I cloned and added some commits to [Halin](https://github.com/moxious/halin) and [Neuler](https://github.com/neo4j-apps/neuler). Once I got my hands a little dirty in the code, I noticed that there were a lot of duplicated bits within each repository. I happened to glance at other (non-Neo4j)

In Mark Needham's [medium post](https://medium.com/neo4j/introducing-the-graph-app-gallery-81aa3e63567b), he mentioned that the concept of the Graph App has been around since October 2017. The [Neo4j community](https://community.neo4j.com/c/neo4j-graph-platform/graph-apps) around this topic is essentially crickets.

I for one am very surprised that the ecosystem is still so small, and isolated from each other. Maybe the knowledge seperation is the reason.

Our efforts, and this website is to improve these gaps by putting all of the building blocks in one location.

## Our Purpose

Some things we are focused on achieving:

- Include instructions to install custom applications
- Build and include Starters for modern javascript frameworks
- Include common javascript integration libraries
- Include any helpful patterns

_Note_: We have tons of ideas, but limited time. --Day jobs, hurricane season, etc

This effort kicked off when the [Global Graph Hack 2019](https://neo4j.com/graph-hack-19/) theme released on Sep. 02, 2019, which is to build anything that benefits other Neo4j community members.
