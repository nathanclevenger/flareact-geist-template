import { Card, Col, Link, Page, Row, Snippet, Spacer } from '@geist-ui/react'
import Head from "flareact/head";

export default function Index({data}) {
  return (
    <Page size="small">
      <Head>
          <title>Flareact Geist Template</title>
          <link rel="canonical" href="https://saas.dev/template" />
      </Head>
      <h1>
        Hello, World!
      </h1>
      <p>You're running Geist in React on the Edge!</p>
      <Snippet text="yarn add @geist-ui/react" width="300px" />
      <Spacer y={2}/>
      <Row gap={2} style={{ marginBottom: '15px' }}>
        <Col>
          <Card shadow>
            <h4>An opinionated design</h4>
            <p>for rapid app development</p>
          </Card>
        </Col>
        <Col>
          <Card shadow>
            <h4>An opinionated design</h4>
            <p>for rapid app development</p>
          </Card>
        </Col>
        <Col>
          <Card shadow>
            <h4>An opinionated design</h4>
            <p>for rapid app development</p>
          </Card>
        </Col>
      </Row>
      <Page.Footer align="center">
        <Link href="https://saas.dev">Powered by SaaS.dev</Link>
        <Spacer y={1}/>
      </Page.Footer>
    </Page>
  );
}

export async function getEdgeProps() {
  const data = await fetch('https://word.as/api/template').then(res => res.json());

  return {
    props: {
      data,
    },
    // Revalidate these props once every 60 seconds
    revalidate: 60,
  };
}