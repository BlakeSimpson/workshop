/**
 * Set up redux store and react-redux Provider in this file
 */
import React from 'react';
import TodoList from './TodoList';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoReducer from './reducer';

const store = createStore(
  todoReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () => {
	return (
     <Provider store={store}>
		  <TodoList />
     </Provider>
	)
}

export default App;
