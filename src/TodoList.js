/**
 * Connect this component to the Redux state for the items and the input value
 */
import React, { Component } from 'react';
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';
import { connect } from 'react-redux';
import { addItem, editInput, checkItem } from './actions';

class TodoList extends Component {
  // Add an item
	addItem = (evt) => {
		evt.preventDefault();

    if (!this.props.inputValue) { return;}

    this.props.dispatch(addItem())
  }

	// Edit the input
	editInput = (evt) => {
		this.props.dispatch(editInput(evt.target.value))
	}

  checkItem = (text) => {
    this.props.dispatch(checkItem(text))
  }

	render() {
		return (
			<div>
				<ul>
					{this.props.items && this.props.items.map((item, index) => (
						<li key={index}>
							<TodoItem
								onClick={this.checkItem}
								text={item.text}
								checked={item.checked}
							/>
						</li>
					))}
				</ul>

				<form onSubmit={this.addItem}>
					<TodoInput
						onChange={this.editInput}
						value={this.props.inputValue}
					/>
				</form>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
    inputValue: state.inputValue
  }
}

export default connect(mapStateToProps)(TodoList);
