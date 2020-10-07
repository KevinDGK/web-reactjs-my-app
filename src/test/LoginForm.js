import React from "react";
import {message} from "antd";

/*
    登录表单

    受控组件：React的state为唯一的数据源，还控制着用户输入过程中表单发生的操作。

    账号Input组件的受控流程：
    1.在表单元素上设置的value属性为this.state.name，那么显示的数值始终来自React的state，即state成为了其唯一的数据源；
    2.当input控件每次有按键输入时，会触发onChane()，更新this.state.name的数值；
    3.this.state.name数值变更后，input控件显示的内容也会自动刷新。

    处理多个输入：当需要处理多个 input 元素时，我们可以给每个元素添加 name 属性，并让处理函数根据 event.target.name 的值选择要执行的操作。

    受控输入空值：如果直接在组件上指定value属性的数值，则用户不可输入。

    非受控组件：文件等。
 */
export default class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            pwd: "",
            id: "person",
        }
    }

    render() {
        return <form onSubmit={(event) => this.handleLoginSubmit(event)}>
            <label>
                账号：
                <input type="text" value={this.state.name} onChange={(event) => this.handleInputName(event)}/>
            </label>
            <label>
                密码：<input type="password" value={this.state.pwd} onChange={(event) => this.handleInputPwd(event)}/>
            </label>
            <label>
                身份：
                <select value={this.state.id} onChange={(event) => this.handleInputId(event)}>
                    <option value="admin">管理员</option>
                    <option value="person">普通人员</option>
                    <option value="guest">游客</option>
                </select>
            </label>
            <input type="submit" value="登录"/>
        </form>;
    }

    // 采用箭头函数编写事件处理函数，如果需要event事件对象，则需要显式传递
    handleInputName(event) {
        console.log(event);
        this.setState({
            name: event.target.value,
        });
    }

    handleInputPwd(event) {
        this.setState({
            pwd: event.target.value,
        });
    }

    handleInputId(event) {
        this.setState({
            id: event.target.value,
        });
    }

    // 表单提交
    handleLoginSubmit(event) {
        console.info(event);
        // 通过JSON.stringify()方法可以将state对象转换成JSON对象，方便打印
        message.info(JSON.stringify(this.state));
        event.preventDefault();
    }
}