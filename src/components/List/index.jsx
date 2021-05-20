import list from './index.module.css'
import React, {Component} from 'react';
import Item from "../Item";

class List extends Component {
    render() {
        return (
            <div>
                <ul className={list}>
                    <Item/>
                    <Item/>
                </ul>
            </div>
        );
    }
}

export default List;