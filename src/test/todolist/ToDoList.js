import React from "react";
import ToDoItem from "./ToDoItem";

import "./ToDoItem.css"

/**
 * 任务列表
 */
export default class extends React.Component{

    // state = {
    //     list: [
    //         // "Learn React",
    //         // "Learn English",
    //         // "Learn Flutter"
    //     ],
    //     inputValue: ""
    // };

    constructor(props) {
        super(props);
        this.state = {
            list: [
                // "Learn React",
                // "Learn English",
                // "Learn Flutter"
            ],
            inputValue: ""
        };

        // this.handleInputChange = this.handleInputChange.bind(this)
        // this.handleDeleteItem = this.handleDeleteItem.bind(this)
        // this.handleAddTask = this.handleAddTask.bind(this)
    }

    render() {
        return (
            <div>
                <div className="div-title">Where there is a will, there is a way.</div>

                {/*新增任务*/}
                <div className="div-add-task">
                    <span>Create a new Task: </span>
                    <input value={this.state.inputValue} onChange={this.handleInputChange}/>
                    {/* 第一个this指向的是按钮本身，第二个this指向的是ToDoList */}
                    <button onClick={this.handleAddTask}>Add</button>
                </div>

                {/*当前任务列表*/}
                <div style={{"paddingLeft": "50px"}}>当前任务列表</div>
                <div className="div-add-task">{this.getToDoItems()}</div>
            </div>
        );
    }

    getToDoItems() {
        return this.state.list.map((item, index) => {
            // return <li key={index} onClick={this.handleItemClick.bind(this, index)}>{item}</li>

            // 父组件通过属性的形式向子组件传递参数，子组件通过props接收父组件传递过来的参数
            return (
                <ToDoItem
                    key={index}
                    content={item}
                    index={index}
                    deleteItem={this.handleDeleteItem}
                />
            )
        })
    }

    // => 箭头函数
    handleAddTask = () => {

        console.log("handleAddTask", this)

        // 当数据发生变化的时候，界面会被重新渲染
        // this.setState({
        //     // ...展开运算符，...this.state.list表示原有数据，结果就是在原有数据的基础上再追加一个Item
        //     list: [...this.state.list, this.state.inputValue],
        //     // 增加成功后，清空输入框数据
        //     inputValue: ""
        // })
    }

    handleInputChange = (e)  => {
        this.setState({
            inputValue: e.target.value
        })
    }

    handleItemClick = (index)  => {
        const list = [...this.state.list]
        list.splice(index, 1)
        this.setState({
            list: list
        })
    }

    handleDeleteItem = (index)  => {
        const list = [...this.state.list]
        list.splice(index, 1)
        this.setState({
            list: list
        })
    }
}

