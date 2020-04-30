import React, { Component } from 'react';
import CustomCmp from '../customCmp';
import './index.less'
export class Header extends CustomCmp<{}, {}> {
    render() {
        return (
            <header className='free-header' style={this.getFreeStyle()}>
                {this.props.children}
            </header>
        )
    }
}
