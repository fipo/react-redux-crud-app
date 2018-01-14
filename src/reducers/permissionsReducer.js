import { GET_PERMISSIONS, UPDATE_PERMISSIONS } from '../actions/actionTypes'

export default function permissionsReducer(state = [], action) {
  switch (action.type) {
    case GET_PERMISSIONS:
    case UPDATE_PERMISSIONS:
      return [...action.payload]
    default:
      return state
  }
}
