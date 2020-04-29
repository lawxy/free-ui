import React, { Component } from 'react'
import {contextProps, Context} from '../';
//@ts-ignore
import BasicProps from '@/tyings'
interface Props extends BasicProps<HTMLDivElement> {
    span?: number //占据百分比
}
export default class Row extends Component {
    renderContent = (props: contextProps) => {
        console.log(props)
        return (<div className="free-row">
                    row
                </div>)
    }
    render() {
        return (
            <Context.Consumer>
                {this.renderContent}
            </Context.Consumer>
            
        )
    }
}
