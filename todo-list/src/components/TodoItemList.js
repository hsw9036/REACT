import React, {Component} from 'react'
import TodoItem
 from './TodoItem';
class TodoItemList extends Component {
    render () {
        const {todos,onToggle,onRemove} = this.props;
        return (
            <div>
                <TodoItem text="해위"/> 
                <TodoItem text="반가웡"/>
                <TodoItem text="응애"/>
            </div>
        );
    }
}




export default TodoItemList;