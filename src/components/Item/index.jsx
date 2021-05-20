import item from './index.module.css'
import React, {Component} from 'react';

class Item extends Component {
    render() {
        return (
            <li className={item}>
                <label>
                    <input type='checkbox'/>
                    <span>xxxx</span>
                </label>
                <button style={{display:'none'}}>删除</button>
            </li>
        );
    }
}

export default Item;