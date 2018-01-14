import { combineReducers } from 'redux'
import permissionsReducer from './permissionsReducer'
import productsReducer from './productsReducer'

const rootReducer = combineReducers({
  products: productsReducer,
  permissions: permissionsReducer
})

export default rootReducer
