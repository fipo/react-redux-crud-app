import React from 'react'

const Delete = props => (
  <button onClick={() => props.handleDelete(props.id)}>Delete</button>
)

export default Delete
