import React, {Component} from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form.js';
import TodoItemList from './components/TodoItemList.js';

class App extends Component {
  render () {
    return (
      <TodoListTemplate form={<Form/>}>
        <TodoItemList/>
      </TodoListTemplate>
    );
  }
}
export default App;
