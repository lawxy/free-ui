import React from 'react'
import { render } from 'react-dom'
import { Layout, Row, Col, Container, Header, Footer, Content, Aside } from './components'
const root = document.getElementById('root');
const el = (
    (<div>
        <Layout width={600}>
            <Row style={{ marginBottom: '10px' }} gutter={12}>
                <Col span={16}>col1</Col>
                <Col>col2</Col>
            </Row>
            <Row>
                <Col>col1</Col>
                <Col>col2</Col>
                <Col>col3</Col>
                <Col>col4</Col>
            </Row>
        </Layout>

        <Container width={700}>
            <Header>header</Header>
            <Container>
                <Aside>aside</Aside>
                <Content className='aaa' style={{ margin: '0 10px' }}>content</Content>
                <Aside>aside2</Aside>
            </Container>
            <Footer>footer</Footer>
        </Container>
    </div>)

)
render(el, root)
// @ts-ignore
if (module.hot) {
    // @ts-ignore
    module.hot.accept(() => {
        render(el, root)
    })
}