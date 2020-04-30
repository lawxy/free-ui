import React, { Component } from 'react'

export default class BaseCmp<P, S> extends Component<P, S> {
    getCustomClass() {
        const { className } = this.props as any;
        return className ? className : ''
    }
}
