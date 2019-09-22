import { combineReducers } from 'redux'
import {userReducer} from './userReducer'
import {productReducer} from './productReducer'

export const allReducers = combineReducers({
  user: userReducer,
  products: productReducer
})