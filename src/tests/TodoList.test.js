import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import TodoList from '../TodoList';
import configureStore from 'redux-mock-store';

const items = [{
  text: 'Get to Las Palmas 🌴',
  checked: true,
}, {
  text: 'Learn the basics of React 👩‍🎓',
  checked: false,
}, {
  text: 'Go surfing 🏄',
  checked: false,
}];

const mockStore = configureStore()

const createStore = (abcItems = items, value = '') => {
  return mockStore({
    items: abcItems,
    inputValue: value
  })
}


it('should render the items from the Redux state', () => {
  const store = createStore()
	const tree = toJson(shallow(<TodoList items={items} store={store} />));
	expect(tree).toMatchSnapshot();
});

it('should set the value of the TodoInput from the Redux state', () => {
  const store = createStore([])
	const component = shallow(<TodoList items={[]} store={store} inputValue="Test value" />);
	expect(toJson(component)).toMatchSnapshot();
});

it('should dispatch the edit input action when new text is entered', () => {
  const store = createStore([])
  const dispatch = jest.fn();
	const component = shallow(<TodoList items={[]} store={store} dispatch={dispatch} />);
  component.find('TodoInput').simulate('change', { target: { value: 'Changed input' }});
  expect(dispatch).toHaveBeenCalledWith({
    type: 'EDIT_INPUT',
    text: 'Changed input'
  });
});

it('should dispatch the add item action when an item is added', () => {
  const store = createStore([])
  const dispatch = jest.fn();
	const component = shallow(<TodoList items={[]} store={store} dispatch={dispatch} />);
  const preventDefault = jest.fn();
  component.find('form').simulate('submit', { preventDefault });
  expect(preventDefault).toBeCalled();
  expect(dispatch).toHaveBeenCalledWith({
    type: 'ADD_ITEM'
  });
});

it('should dispatch the check item action when an item is clicked', () => {
  const store = createStore()
  const dispatch = jest.fn();
	const component = mount(<TodoList items={items} store={store} dispatch={dispatch} />);
  const preventDefault = jest.fn();
  component.find('input').at(0).simulate('change');
  expect(dispatch).toHaveBeenCalledWith({
    type: 'CHECK_ITEM',
    text: 'Get to Las Palmas 🌴'
  });
});
