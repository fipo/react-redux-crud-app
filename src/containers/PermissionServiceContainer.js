import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  hasCreatePermission,
  hasReadPermission,
  hasUpdatePermission,
  hasDeletePermission
} from '../utils/hasPermission'
import PermissionService from '../components/PermissionService'
import { updatePermissions } from '../actions/permissionActions'

class PermissionServiceContainer extends Component {
  state = {
    create: false,
    read: false,
    update: false,
    delete: false
  }

  handleChange = event => {
    const { name, checked } = event.target
    this.setState({ [name]: checked })
    const newPermissions = Object.assign(this.state, { [name]: checked })
    this.props.handleUpdatePermissions(newPermissions)
  }

  componentWillReceiveProps(nextProps) {
    const permissions = nextProps.permissions
    this.setState({
      create: hasCreatePermission(permissions),
      read: hasReadPermission(permissions),
      update: hasUpdatePermission(permissions),
      delete: hasDeletePermission(permissions)
    })
  }

  render() {
    return (
      <PermissionService
        handleChange={this.handleChange}
        create={this.state.create}
        read={this.state.read}
        update={this.state.update}
        delete={this.state.delete}
      />
    )
  }
}

const mapStateToProps = state => {
  return { permissions: state.permissions }
}

const mapDispatchToProps = dispatch => ({
  handleUpdatePermissions(payload) {
    dispatch(updatePermissions(payload))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(
  PermissionServiceContainer
)
