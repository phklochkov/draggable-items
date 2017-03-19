import * as ActionTypes from '../actions/types'

const initialState = { items: [] }

const main = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.TAB_MAIN_ADD_ITEM:
      const { id, position } = action
      return state.items.some((i) => i.id === id) ?
        state :
        { ...state, items: [...state.items, { id, title: 'aaa', position }] }
    default:
      return state
  }
}

export { main }
