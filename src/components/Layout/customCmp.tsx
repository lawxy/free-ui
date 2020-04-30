import React, { Component } from 'react'
import { BaseCmp } from '../typings'

export default class CustomCmp<P, S> extends BaseCmp<P, S> {
    getFreeStyle() {
        let { width, height, bgc, style } = this.props as any;
        let newWidth = width ? width + 'px' : '';
        let newHeight = height ? height + 'px' : '';
        let freeProperty = { width: newWidth, height: newHeight, backgroundColor: bgc ? bgc : '' }
        // 加入自定义样式
        if (style && typeof style === 'object') {
            freeProperty = { ...freeProperty, ...style }
        }
        return freeProperty
    }
}
