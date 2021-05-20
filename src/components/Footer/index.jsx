import footer from './index.module.css'
import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <div className={footer}>
                <label>
                    <input type='checkbox'/>
                </label>
                <span>
                    <span>已完成0</span> / 全部 2
                </span>
                <button>清除已完成的任务</button>
            </div>
        );
    }
}

export default Footer;