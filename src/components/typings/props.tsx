import { HTMLAttributes } from 'react'
export default interface BasicProps<T> extends React.HTMLAttributes<T> {
    style?: Object;  // 完全自定义样式
    width?: number;
    height?: number;
    bgc?: string;
    className?: string;
}