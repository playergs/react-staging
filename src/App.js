import React,{Component} from "react";
import Hello from "./components/Hello/Hello";

//创建并暴露"外壳"组件App
export default class App extends Component {
    render() {
        return (
            <div>
                <Hello/>
            </div>
        );
    }
}

