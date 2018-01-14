import React, { Component } from 'react'
import { connect } from 'react-redux'
import CreateProduct from '../components/ProductForm'
import { createProduct } from '../actions/productActions'
import { capitalize } from '../utils/textTransform'
import { hasCreatePermission } from '../utils/hasPermission'
import Title from '../components/Title'

class CreateProductContainer extends Component {
  state = {
    name: '',
    price: 0,
    currency: ''
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleSubmit = event => {
    event.preventDefault()
    const { name, price, currency } = this.state
    const CreateProduct = {
      id: this._rollTheDice(),
      name: capitalize(name),
      price: parseInt(price, 10),
      currency: currency.toUpperCase()
    }
    this.props.handleSubmitForm(CreateProduct)
    this.handleClearForm(event)
  }

  handleClearForm = event => {
    event.preventDefault()
    this.setState({ name: '', price: 0, currency: '' })
  }

  _rollTheDice = () => {
    return Math.floor(100 + Math.random() * 900)
  }

  render() {
    return (
      <div>
        {hasCreatePermission(this.props.permissions) ? (
          [
            <Title key="title">Create New Product</Title>,
            <CreateProduct
              key="createProduct"
              {...this.state}
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
            />
          ]
        ) : (
          <p>"You don't have the CREATE permission"</p>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({ permissions: state.permissions })

const mapDispatchToProps = dispatch => ({
  handleSubmitForm(payload) {
    dispatch(createProduct(payload))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(
  CreateProductContainer
)
