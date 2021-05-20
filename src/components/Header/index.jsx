import header from './index.module.css'
import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <input className={header} placeholder='按回车提交'/>
            </div>
        );
    }
}

export default Header;