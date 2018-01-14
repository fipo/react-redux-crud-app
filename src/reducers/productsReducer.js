import {
  GET_PRODUCTS,
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT
} from '../actions/actionTypes'

export default function productsReducer(state = [], action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return [...state, ...action.payload]
    case CREATE_PRODUCT:
      return [...state, action.payload]
    case UPDATE_PRODUCT:
      const indexOfUpdatedProduct = state.findIndex(
        product => product.id === action.payload.id
      )
      state.splice(indexOfUpdatedProduct, 1)
      state.splice(indexOfUpdatedProduct, 0, action.payload)
      return [...state]
    case DELETE_PRODUCT:
      const indexOfDeletedProduct = state.findIndex(
        product => product.id === action.id
      )
      state.splice(indexOfDeletedProduct, 1)
      return [...state]
    default:
      return state
  }
}
