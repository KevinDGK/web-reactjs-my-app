import React from "react";
import "./ToDoItem.css"

class ToDoItem extends React.Component{

    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {

        // 子组件如果想要和父组件进行通信，子组件要调用父组件传递过来的方法
        // this.props.deleteItem(this.props.index)

        const { deleteItem, index } = this.props;
        deleteItem(index);
    }

    render() {
        const {index,content} = this.props
        return (
            <div onClick={this.handleDelete}>
                <span className=".span-task-item">{index}</span>
                <span className=".span-task-item">{content}</span>
            </div>
        );
    }
}

export default ToDoItem