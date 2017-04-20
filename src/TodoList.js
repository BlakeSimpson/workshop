/**
 * This component should manage the todo items, letting users check existing ones and add new ones
 */
import React, { Component } from 'react';
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';

class TodoList extends Component {
  constructor (props) {
    super(props);

    this.state = {
      items: props.items,
      value: ''
    };
  }

  checkItem = (text) => {
    const items = this.state.items.map(item => {
      if (item.text === text) {
        item.checked = !item.checked;
      }

      return item;
    })

    this.setState({items: items});
  }

  newTodoTextChanged = (event) => {
    this.setState({value: event.target.value})
  }

  addItem = (event) => {
    event.preventDefault()

    const items = [...this.state.items, {checked: false, text: this.state.value}]

    this.setState({
      value: '',
      items: items
    })
  }

	render () {
		return (
      <div>
        <ul>
          {this.state.items.map((item, index) => (
            <li key={index}>
              <TodoItem text={item.text} checked={item.checked} onClick={this.checkItem} />
            </li>
          ))}
        </ul>

        <form onSubmit={this.addItem}>
          <TodoInput onChange={this.newTodoTextChanged} value={this.state.value} />
        </form>
      </div>
		)
	}
}

export default TodoList;
