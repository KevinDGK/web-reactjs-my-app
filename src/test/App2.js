import React from "react";
import {Welcome, Welcome01} from "./Welcome";
import Clock from "./Clock";
import {Divider, DatePicker} from "antd";
import Event from "./Event";
import NumberList from "./NumberList";
import LoginForm from "./LoginForm";
import StudentInfo from "./StudentInfo";

// 引入antd的默认样式
import 'antd/dist/antd.css';

function App2() {

    const numberList = [1, 3, 5, 7, 9]

    return <div>
        <div>Component & Props: </div>
        <Welcome name="Kevin Dai"/>
        <Welcome01 name="DaiGaoKai"/>

        <Divider orientation="center" dashed>华丽的分割线</Divider>

        <div>State & LifeCycle: </div>
        <Clock />

        <Divider orientation="center" dashed>华丽的分割线</Divider>

        <div>Event & handler: </div>
        <Event />

        <Divider orientation="center" dashed>华丽的分割线</Divider>
        <div>List: </div>
        <NumberList numberList={numberList}/>

        <Divider orientation="center" dashed>华丽的分割线</Divider>
        <div>Form: </div>
        <LoginForm />

        <Divider orientation="center" dashed>华丽的分割线</Divider>
        <div>State Up: </div>
        <StudentInfo />
    </div>
}

export default App2;