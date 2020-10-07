import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import App2 from "./test/App2";

/**
 * 通过ReactDOM将元素渲染到根节点上，主要参数：
 * - element: DOMElement<DOMAttributes<T>, T>, 表示待渲染的元素
 * - container: Element | DocumentFragment | null, 容器，详见 "public/index.html"
 */
ReactDOM.render(
    // 默认的顶级组件
    <React.StrictMode>
        {/*<App/>*/}
        <App2 />
    </React.StrictMode>,

    // 自定义内容，简单显示Hello World！
    // <div>Hello World! This is Kevin Dai!</div>,
    
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
