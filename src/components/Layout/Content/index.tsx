import React, { Component } from 'react'
import { BasicProps } from '../../typings';
import CustomCmp from '../customCmp';
import './index.less';
interface Props extends BasicProps<HTMLElement> {

}

export class Content extends CustomCmp<Props, {}> {
    render() {
        console.log(this.props)
        return (
            <section className={`free-content ${this.getCustomClass()}`} style={this.getFreeStyle()}>
                {this.props.children}
            </section>
        )
    }
}
