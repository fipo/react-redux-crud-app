import React from 'react'
import Title from '../components/Title'

const PermissionService = props => (
  <div>
    <Title>Permission Service</Title>
    <ul>
      <li>
        <label>
          Create:
          <input
            type="checkbox"
            onChange={props.handleChange}
            checked={props.create}
            name="create"
          />
        </label>
      </li>
      <li>
        <label>
          Read:
          <input
            type="checkbox"
            onChange={props.handleChange}
            checked={props.read}
            name="read"
          />
        </label>
      </li>
      <li>
        <label>
          Update:
          <input
            type="checkbox"
            onChange={props.handleChange}
            checked={props.update}
            name="update"
          />
        </label>
      </li>
      <li>
        <label>
          Delete:
          <input
            type="checkbox"
            onChange={props.handleChange}
            checked={props.delete}
            name="delete"
          />
        </label>
      </li>
    </ul>
  </div>
)

export default PermissionService
