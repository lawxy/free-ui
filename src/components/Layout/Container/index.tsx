import React, { Component, ReactNode, ReactElement } from 'react'
import { BasicProps } from '../../typings';
import CustomCmp from '../customCmp'
import './index.less'
interface Props extends BasicProps<HTMLDivElement> {

}
interface State {
    hasAside: boolean;
}
export class Container extends CustomCmp<Props, State> {
    state = {
        hasAside: false
    }
    componentDidMount() {
        this.setState({
            hasAside: this.judgeHasAside()
        })
    }
    // 判断子组件中是否有Aside组件  以此修改样式规则
    judgeHasAside() {
        const nodeArr: Array<Exclude<ReactNode, boolean | null | undefined>> = React.Children.toArray(this.props.children);
        console.log(nodeArr)
        for (let i = 0; i < nodeArr.length; i++) {
            let node = nodeArr[i] as ReactElement;
            if (node.type && typeof node.type === 'function' && node.type.name === 'Aside') {
                return true;
            }
        }
        return false;
    }

    render() {
        return (
            <div style={this.getFreeStyle()} className={`free-container ${this.state.hasAside ? 'free-hasAside' : ''}`}>
                {this.props.children}
            </div >
        )
    }
}
