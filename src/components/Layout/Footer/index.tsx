import React, { Component } from 'react';
import CustomCmp from '../customCmp';
import './index.less'
export class Footer extends CustomCmp<{}, {}> {
    render() {
        return (
            <footer className='free-footer' style={this.getFreeStyle()}>
                {this.props.children}
            </footer>
        )
    }
}
