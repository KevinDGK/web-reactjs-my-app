import React from "react";

/*
    自定义定时器，可用于理解组件的状态和生命周期

    参数：
    - this.props: 父组件传递过来的参数
    - this.state: 组件本身状态

    调用流程：
    1.当 <Clock /> 被传给 ReactDOM.render()的时候，React 会调用 Clock 组件的构造函数。因为 Clock 需要显示当前的时间，
    所以它会用一个包含当前时间的对象来初始化 this.state。我们会在之后更新 state。
    2.之后 React 会调用组件的 render() 方法。这就是 React 确定该在页面上展示什么的方式。然后 React 更新 DOM 来匹配 Clock
    渲染的输出。
    3.当 Clock 的输出被插入到 DOM 中后，React 就会调用 ComponentDidMount() 生命周期方法。在这个方法中，Clock 组件向浏览器
    请求设置一个计时器来每秒调用一次组件的 tick() 方法。
    4.浏览器每秒都会调用一次 tick() 方法。 在这方法之中，Clock 组件会通过调用 setState() 来计划进行一次 UI 更新。得益于
    setState() 的调用，React 能够知道 state 已经改变了，然后会重新调用 render() 方法来确定页面上该显示什么。这一次，render()
    方法中的 this.state.date 就不一样了，如此以来就会渲染输出更新过的时间。React 也会相应的更新 DOM。
    5.一旦 Clock 组件从 DOM 中被移除，React 就会调用 componentWillUnmount() 生命周期方法，这样计时器就停止了。
 */
export default class Clock extends React.Component {

    // 构造函数
    constructor(props) {
        // 需要使用props参数来调用父类的构造函数
        super(props);
        // 给 this.state 赋初始值
        this.state = {
            date: new Date()
        };
    }

    // 挂载（Mount）：组件已经被渲染到DOM中
    // 每当 Clock 组件第一次加载到 DOM 中的时候，我们都想生成定时器，这在 React 中被称为挂载。
    componentDidMount() {
        console.log("LifeCycle|componentDidMount")
        // 开启一个定时器，然后每间隔1s调用一下tick函数
        this.timerID = setInterval(() => {
            this.tick();
        }, 1000);
    }

    // 卸载（Unmount）
    // 每当 Clock 生成的这个 DOM 被移除的时候，我们也会想要清除定时器，这在 React 中被称为卸载。
    componentWillUnmount() {
        console.log("LifeCycle|componentWillUnmount")
        clearInterval(this.timerID)
    }

    // 滴答，滴答
    tick = () => {
        // 更新state的某些值，React会把我们设置的对象合并到当前的state。React会重新调用render()方法来刷新页面。
        this.setState({
            date: new Date()
        });
    }

    // 渲染界面
    render() {
        return <div>当前时间：{this.state.date.toLocaleTimeString()}</div>;
    }
}