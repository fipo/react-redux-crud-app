import React from 'react'

const PermissionService = () => (
  <div>
    <h1>Permission Service</h1>
    <ul>
      <li>
        <label>
          Create:
          <input type="checkbox" />
        </label>
      </li>
      <li>
        <label>
          Read:
          <input type="checkbox" />
        </label>
      </li>
      <li>
        <label>
          Update:
          <input type="checkbox" />
        </label>
      </li>
      <li>
        <label>
          Delete:
          <input type="checkbox" />
        </label>
      </li>
    </ul>
  </div>
)

export default PermissionService
