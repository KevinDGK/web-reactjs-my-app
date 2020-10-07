import React from "react";

/*
    列表函数组件
    - 入参：numberList，一个内部元素为数字的数组列表；
    - 出参：元素列表
 */
export default function NumberList(props) {
    // 从props中获取入参numberList
    const numberList = props.numberList;
    // 将一个内部元素为数字的数组列表 转换为 内部元素为React元素的列表
    let items = numberList.map((number, index) =>
        // 我们需要给列表的每一个元素赋予一个确定的标示，通常可以用数据中的id来表示。如果真的没有id，也可以用元素在数组中的索引。
        // 并且元素的key只有放在就近的数组上下文中才有意义。
        <li key={index}>
            第{number}个
        </li>
    );
    return (
        <ul>{items}</ul>
    );
}