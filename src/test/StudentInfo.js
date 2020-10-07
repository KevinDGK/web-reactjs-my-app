import React from "react";

// 年龄组件
function Age(props) {
    return <label>
        小明的年龄是：
        <input
            type="number"
            onChange={(event) => props.onAgeChange(event.target.value)}
        />
        岁
    </label>;
}

// 是否成年组件
function ID(props) {
    return <div>身份：{parseInt(props.age) >= 18 ? "成年人" : "未成年人"}</div>;
}

/*
    学生信息输入组件，可以输入年龄，然后根据年龄判断是否成年。
    为了方便，将年龄和是否成年这两个组件写成了函数组件。

    1.在年龄组件Age中输入学生的年龄，触发onChange，调用父组件传递的props中的回调函数onAgeChange()
    2.在父组件StudentInfo中回调函数onAgeChange()触发this.handleAgeChange(age)，修改state.age数值；
    3.由于state.age数值已经通过props传入ID组件，所以当数值改变时，ID组件会收到新的props.age，刷新UI；
 */
export default class StudentInfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            age: "0",
        }
    }

    render() {
        return <div>
            <Age onAgeChange={(age) => this.handleAgeChange(age)}/>
            <ID age={this.state.age}/>
        </div>;
    }

    handleAgeChange(age) {
        this.setState({age})
    }
}