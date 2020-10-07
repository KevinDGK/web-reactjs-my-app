import React from "react";
import {Button, message, Space} from "antd";

/*
    处理按钮点击事件的函数
    - 命名采用小驼峰式(camelCase)。
    - 不能通过返回false的方式阻止默认行为，必须显式的使用 preventDefault。

    关于传递参数：
    如果需要传递一个参数，那么React 的事件对象 e 会被作为第二个参数传递。如果通过箭头函数的方式，事件对象必须显式的进行传递，
    而通过 bind 的方式，事件对象以及更多的参数将会被隐式的进行传递。
 */
export default class Event extends React.Component {

    constructor(props) {
        super(props);
        console.log("constructor")
        // 在构造函数中，初始化state
        this.state = {
            isToggleOn: true,
        }
        // 在handleOnclick01中使用的this默认为函数本身，执行该方法后，this就会变成指的是Event对象
        this.handleOnclick01 = this.handleOnclick01.bind(this);
    }

    componentDidMount() {
        console.log("componentDidMount")
    }

    componentWillUnmount() {
        console.log("componentWillUnmount")
    }

    render() {
        return <div>
            <Space>
                <Button onClick={this.handleOnclick01}>按钮01，普通写法</Button>

                <Button onClick={(event) => this.handleOnclick02(event)}>按钮02，箭头函数写法</Button>

                <Button onClick={this.handleOnclick03}>
                    按钮03，ES6的public class fields语法
                </Button>

                <Button type="primary" onClick={this.handleOnclick04}>
                    按钮04，点击切换开关状态
                </Button>

                <div>开关状态为 {this.state.isToggleOn ? "ON" : "OFF"}</div>
            </Space>
        </div>;
    }

    // 写法一：手动绑定
    handleOnclick01(event) {
        // 在JavaScript中，class的方法默认不会绑定this，即如果在函数内部使用this，则为undefined。需要手动进行bind，见构造方法。
        message.info("按钮01，普通写法")
    }

    // 写法二：箭头函数
    // - 如果需要事件对象，则必须显式传递。
    handleOnclick02(event) {
        message.info("按钮02，箭头函数写法")
    }

    // 写法三：ES6的public class fields语法
    handleOnclick03 = (event) => {
        message.info("按钮03，ES6的public class fields语法")
    };

    // 按钮的点击响应处理
    handleOnclick04 = (event) => {
        console.log("handleOnclick04|", event)
        message.info("点击了按钮04")
        // 由于state的更新可能是异步的，所以不要直接依赖state的属性值来更新下一个状态。可以将上一个state作为参数传入，setState()
        // 方法接收的是一个函数，而不是一个对象。
        this.setState((state, props) => ({
            isToggleOn: !state.isToggleOn,
        }))
    };
}