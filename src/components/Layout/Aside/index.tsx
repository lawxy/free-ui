import React, { Component } from 'react'
import { BasicProps } from '../../typings';
import CustomCmp from '../customCmp';
import './index.less'

interface Props extends BasicProps<HTMLElement> {

}
export class Aside extends CustomCmp<Props, {}> {
    render() {
        return (
            <aside style={this.getFreeStyle()} className='free-aside'>
                {this.props.children}
            </aside>
        )
    }
}
