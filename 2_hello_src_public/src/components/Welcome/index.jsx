import React, {Component} from 'react';
import welcome from './index.module.css'

export default class Index extends Component {
    render() {
        return (
            <div>
                <h2 className={welcome.title}>Welcome</h2>
            </div>
        );
    }
}