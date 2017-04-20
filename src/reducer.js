/**
 * Write your reducer in here that handles the three actions from actions.js and has two properties in its state:
 *
 * - items      [Array]  The items in the todolist
 * - inputValue [String] The value of the input field
 */

const defaultState = {
  items: [
    {
      text: 'Get to Las Palmas 🌴',
      checked: true,
    }, {
      text: 'Learn the basics of React 👩‍🎓',
      checked: false,
    }, {
      text: 'Go surfing 🏄',
      checked: false,
    }
  ],
  inputValue: ''
}

const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        items: [
          ...state.items,
          {
            text: state.inputValue,
            checked: false
          }
        ],
        inputValue: ''
      }

    case 'EDIT_INPUT':
      return {
        ...state,
        inputValue: action.text
      }

    case 'CHECK_ITEM':
      return {
        ...state,
        items: state.items.map(item => {
				  if (item.text !== action.text) return item;

				  return {
					  ...item,
					  checked: !item.checked,
				  }
         })
			}

    default:
      return state
  }
}

export default todoReducer
