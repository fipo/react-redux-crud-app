import { API_URL } from '../api'
import { GET_PERMISSIONS, UPDATE_PERMISSIONS } from './actionTypes'
import axios from 'axios'

export function getPermissionsSuccess(permissions) {
  return { type: GET_PERMISSIONS, payload: permissions[0].options }
}

export function getPermissions() {
  return dispatch => {
    axios
      .get(`${API_URL}/permissions`)
      .then(response => {
        dispatch(getPermissionsSuccess(response.data))
      })
      .catch(error => {
        console.error('getPermissions axios error', error)
      })
  }
}

export function updatePermissions(payload) {
  const permissions = []
  const id = 1
  Object.keys(payload).forEach(permission => {
    if (payload[permission]) {
      permissions.push(permission.toUpperCase())
    }
  })

  const newPermissions = {
    id,
    options: permissions
  }

  return dispatch => {
    axios
      .put(`${API_URL}/permissions/${id}`, newPermissions)
      .then(response => dispatch(updatePermissionsSuccess(response.data)))
      .catch(error => console.error('updatePermissions axios error', error))
  }
}

export function updatePermissionsSuccess(permissions) {
  return { type: UPDATE_PERMISSIONS, payload: permissions.options }
}
