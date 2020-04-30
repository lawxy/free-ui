import React, { Component } from 'react'
import { BasicProps } from '../../typings';
import CustomCmp from '../customCmp'
import './index.less'
interface Props extends BasicProps<HTMLDivElement> {
    // span?: number //占据百分比
    gutter?: number;
    justify?: string;
    align?: string
}

export interface contextProps {
    gutter: number,
    childrenLength: number
}
export const Context = React.createContext<contextProps>({
    gutter: 0,
    childrenLength: 0
})

export class Row extends CustomCmp<Props, {}> {
    renderContent = () => {
        let { children, gutter } = this.props;

        const childrenLength = React.Children.count(this.props.children);
        return (<div className="free-row" style={this.getFreeStyle()}>
            <Context.Provider value={{ gutter: gutter ? gutter : 0, childrenLength }}>
                {children}
            </Context.Provider>
        </div>)
    }
    render() {
        return (
            <>{this.renderContent()}</>
        )
    }
}
