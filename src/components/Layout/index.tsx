import React, { Component, Children } from 'react';
import Row from './Row';
import Col from './Col'
import './index.less'
//@ts-ignore
import {BasicProps, BaseCmp} from '../typings';
interface Props extends BasicProps<HTMLDivElement> {
    flex?: number;
    width?: number;
    height?: number;
    bgc?: string;
    justify?: string;
    align?: string
}
interface State {

}
// 传给下层元素判断百分比
export interface contextProps {
    flex: number,
    childrenLength: number
}
export const Context = React.createContext<contextProps>({
    flex: 0,
    childrenLength: 0
})
class Layout extends BaseCmp<Props, State> {
    render() {
        let {width, height, children, flex, bgc, freeStyle} = this.props;
        let newWidth = width ? width + 'px' : '';
        let newHeight = height ? height + 'px' : '';
        const childrenLength = React.Children.count(this.props.children);
        let style = {width: newWidth, height: newHeight, backgroundColor: bgc ? bgc : ''}
        // 加入自定义样式
        if(freeStyle && typeof freeStyle === 'object') {
            style = {...style, ...freeStyle}
        }
        return (
            <div className="free-layout" style={style}>
                <Context.Provider value={{flex: flex ? flex : 0, childrenLength}}>
                    {children}
                </Context.Provider>
            </div>
        )
    }
}
export {
   Layout, Row, Col
}