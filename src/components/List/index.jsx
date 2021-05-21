import React, {Component} from 'react';
import PropType from 'prop-types'
import './index.css'
import Item from "../Item";

class List extends Component {

    static propTypes = {
        updateTodo : PropType.func.isRequired,
        todos : PropType.array.isRequired,
        deleteTodo : PropType.func.isRequired
    }

    render() {
        const {todos, updateTodo, deleteTodo} = this.props
        return (
            <div>
                <ul className='todo-main'>
                    {
                        todos.map((todo) => {
                            return <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default List;