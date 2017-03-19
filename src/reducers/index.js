import { combineReducers } from 'redux'
import { items } from './items'
import { main } from './main'

const state = combineReducers({
  items,
  main
})

export { state }
