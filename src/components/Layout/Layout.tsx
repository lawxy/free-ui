import React, { Component, Children } from 'react';

import './index.less'
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