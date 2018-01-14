import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { deleteProduct } from '../actions/productActions'
import Title from '../components/Title'
import glamorous from 'glamorous'
import variables from '../styles/variables'
import Delete from './Delete'
import Update from './Update'

import {
  hasUpdatePermission,
  hasDeletePermission
} from '../utils/hasPermission'

const StyledProduct = glamorous.div({
  border: `1px solid ${variables.grey}`,
  marginBottom: 5,
  padding: 5
})

class Product extends Component {
  static propTypes = {
    name: PropTypes.string,
    currency: PropTypes.string,
    price: PropTypes.number
  }

  deleteProduct = id => {
    if (window.confirm('Are you sure you wish to delete this item?')) {
      this.props.handleDeleteProduct(id)
    }
  }

  render() {
    const { id, name, price, currency, permissions } = this.props
    return (
      <StyledProduct>
        <Title>{name}</Title>
        <p>
          {currency} {price}
        </p>
        {hasUpdatePermission(permissions) ? <Update {...this.props} /> : ''}
        {hasDeletePermission(permissions) ? (
          <Delete id={id} handleDelete={this.deleteProduct} />
        ) : (
          ''
        )}
      </StyledProduct>
    )
  }
}

const mapStateToProps = state => ({
  permissions: state.permissions
})

const mapDispatchToProps = dispatch => ({
  handleDeleteProduct(payload) {
    dispatch(deleteProduct(payload))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Product)
