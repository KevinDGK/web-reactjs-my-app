import React from "react";

/*
    React组件的两种写法，函数式组件和类组件。
 */

/*
    函数式组件：类似于JavaScript函数，接收带有数据的入参props，并返回一个React元素，用于描述页面展示的内容。
 */
export function Welcome01(props) {
    return <div>
        <h1>Hello, this is Welcome01!</h1>
        <h1>Hello, {props.name}</h1>
    </div>;
}

/*
    ES6的写法，定义一个class，继承React.Component
 */
export class Welcome extends React.Component{
    render() {
        return <div>
            <h1>Hello, this is Welcome!</h1>
            <h1>Hello, {this.props.name}</h1>
        </div>;
    }
}