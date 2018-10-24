import { combineReducers } from 'redux'
import { jarReducer } from './jarReducer'

export const rootReducer = combineReducers({
  jar: jarReducer
})