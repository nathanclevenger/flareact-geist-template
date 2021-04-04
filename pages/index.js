import { Card, Col, Page, Row, Snippet, Spacer } from '@geist-ui/react'

export default function Index() {
  return (
    <Page size="small">
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
      
    </Page>
  );
}