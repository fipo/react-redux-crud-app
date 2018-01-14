import { GET_PERMISSIONS } from '../actions/actionTypes'

export default function permissionsReducer(state = [], action) {
  switch (action.type) {
    case GET_PERMISSIONS:
      return [...state, ...action.payload]
    default:
      return state
  }
}
