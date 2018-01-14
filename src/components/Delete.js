import React from 'react'
import PropTypes from 'prop-types'

const Delete = props => (
  <button onClick={() => props.handleDelete(props.id)}>Delete</button>
)

Delete.propTypes = {
  id: PropTypes.number.isRequired,
  handleDelete: PropTypes.func.isRequired
}

export default Delete
