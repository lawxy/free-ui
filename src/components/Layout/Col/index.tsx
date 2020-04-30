import React, { Component } from 'react'
import { Context } from '../Row'
import { BasicProps } from '../../typings';
import CustomCmp from '../customCmp'
import './index.less'
interface Props extends BasicProps<HTMLDivElement> {
    span?: number
}
interface State {

}
export class Col extends CustomCmp<Props, State> {
    render() {
        return (
            <Context.Consumer>
                {
                    ({ gutter, childrenLength }) => {
                        let percent: number | string = 0;

                        //设置的比例份数大于总分数则平均布局
                        if (this.props.span && gutter && this.props.span < gutter) {
                            percent = this.props.span / gutter;
                        } else if (childrenLength) {
                            percent = 1 / childrenLength;
                        }
                        percent = percent * 100 + '%'
                        const style = this.getFreeStyle();
                        style.width = style.width ? style.width : percent;
                        return (<div className="free-col" style={style}>
                            {this.props.children}
                        </div>)
                    }
                }
            </Context.Consumer>
        )
    }
}
