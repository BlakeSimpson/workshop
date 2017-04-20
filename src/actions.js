/**
 * Add three actions here:
 *
 * - checkItem
 * - addItem
 * - editInput
 */

export const checkItem = (itemText) => {
  return {
    type: 'CHECK_ITEM',
    text: itemText
  }
}

export const addItem = () => {
  return {
    type: 'ADD_ITEM'
  }
}

export const editInput = (value) => {
  return {
    type: 'EDIT_INPUT',
    text: value
  }
}
