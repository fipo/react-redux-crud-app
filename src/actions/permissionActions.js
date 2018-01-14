import { GET_PERMISSIONS } from './actionTypes'
import axios from 'axios'

export function getPermissionsSuccess(apiData) {
  return { type: GET_PERMISSIONS, payload: apiData }
}

export function getPermissions() {
  return dispatch => {
    axios
      .get('http://localhost:8000/permissions')
      .then(response => {
        dispatch(getPermissionsSuccess(response.data))
      })
      .catch(error => {
        console.error('getAPIProducts axios error', error)
      })
  }
}
