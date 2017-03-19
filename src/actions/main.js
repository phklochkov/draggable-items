import * as types from './types'

export const addItem = (id, position) => ({
  type: types.TAB_MAIN_ADD_ITEM,
  id,
  position
})
