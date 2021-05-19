//引入react核心
import React from 'react';
//引入React-dom
import ReactDOM from 'react-dom';
//引入App组件
import App from "./App";

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
)
