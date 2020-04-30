import React, { Component, Children } from 'react';

import './index.less'
//@ts-ignore
import { BasicProps } from '../typings';
import CustomCmp from './customCmp'
interface Props extends BasicProps<HTMLDivElement> {

    justify?: string;
    align?: string
}
interface State {

}
// 传给下层元素判断百分比

class Layout extends CustomCmp<Props, State> {
    render() {
        let { children } = this.props;
        return (
            <div className="free-layout" style={this.getFreeStyle()}>
                {children}
            </div>
        )
    }
}
export {
    Layout
}
export { Row } from './Row';
export { Col } from './Col'
export { Container } from './Container'
export { Header } from './Header'
export { Footer } from './Footer'
export { Content } from './Content'
export { Aside } from './Aside'


