import React, {Component} from 'react';
import PropType from "prop-types";
import {nanoid} from "nanoid";
import './index.css'

class Header extends Component {

    static propTypes = {
        addTodo : PropType.func.isRequired
    }

    handleKeyUp = (event) => {
        const {target, keyCode} = event
        if (keyCode !== 13) {
            return
        }
        if (target.value.trim() === '') {
            alert('内容不能为空')
            return;
        }
        const todoObj = {id : nanoid(), name : target.value, done : false}
        this.props.addTodo(todoObj)
        target.value = ''
    }
    render() {
        return (
            <div className='todo-header'>
                <input onKeyUp={this.handleKeyUp} placeholder='按回车提交'/>
            </div>
        );
    }
}

export default Header;