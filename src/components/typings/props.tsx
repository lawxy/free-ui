import {HTMLAttributes} from 'react'
export default interface BasicProps<T> extends React.HTMLAttributes<T> {
    freeStyle?: Object  // 完全自定义样式
}