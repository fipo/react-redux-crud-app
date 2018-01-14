import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductForm from '../components/ProductForm'
import { updateProduct } from '../actions/productActions'
import { capitalize } from '../utils/textTransform'

class UpdateProductContainer extends Component {
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
    const updatedProductData = {
      id: this.props.id,
      name: capitalize(name),
      price: parseInt(price, 10),
      currency: currency.toUpperCase()
    }
    this.props.handleSubmitForm(updatedProductData)
    this.handleClearForm(event)
  }

  handleClearForm = event => {
    event.preventDefault()
    this.props.onUpdateSuccess()
  }

  componentDidMount() {
    const { name, price, currency } = this.props
    this.setState({ name, price, currency })
  }

  render() {
    const { name, price, currency } = this.state
    return (
      <ProductForm
        name={name}
        price={price}
        currency={currency}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return ownProps
}

const mapDispatchToProps = dispatch => ({
  handleSubmitForm(payload) {
    dispatch(updateProduct(payload))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(
  UpdateProductContainer
)
