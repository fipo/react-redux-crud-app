import { combineReducers } from 'redux'
import {
  GET_PRODUCTS,
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  GET_PERMISSIONS
} from '../actions/actionTypes'

const products = (state = [], action) => {
  if (action.type === GET_PRODUCTS) {
    return [...state, ...action.payload]
  }

  if (action.type === CREATE_PRODUCT) {
    return [...state, action.payload]
  }

  if (action.type === UPDATE_PRODUCT) {
    const indexOfUpdatedProduct = state.findIndex(
      product => product.id === action.payload.id
    )
    state.splice(indexOfUpdatedProduct, 1)
    state.splice(indexOfUpdatedProduct, 0, action.payload)
    return [...state]
  }

  if (action.type === DELETE_PRODUCT) {
    const indexOfDeletedProduct = state.findIndex(
      product => product.id === action.id
    )
    state.splice(indexOfDeletedProduct, 1)
    return [...state]
  }

  return state
}

const permissions = (state = [], action) => {
  if (action.type === GET_PERMISSIONS) {
    return [...state, ...action.payload]
  }

  return state
}

const rootReducer = combineReducers({ products, permissions })

export default rootReducer
