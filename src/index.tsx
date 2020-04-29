import React from 'react'
import {render} from 'react-dom'
import {Layout, Row} from './components'
const root = document.getElementById('root');
const el = (<div>
    <Layout flex={1}>
        <Row>
            <div>1231231</div>
        </Row>
    </Layout>
</div>)
render(el, root)
// @ts-ignore
if(module.hot) {
    // @ts-ignore
    module.hot.accept(() => {
        render(el, root)
    })
}