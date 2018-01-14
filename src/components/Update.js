import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UpdateProductContainer from '../containers/UpdateProductContainer'
import Title from './Title'
import glamorous from 'glamorous'
import variables from '../styles/variables'

const StyledEditForm = glamorous.div('x', props => {
  const visibility = props.visible ? 'block' : 'none'
  return {
    border: `1px solid ${variables.grey}`,
    backgroundColor: variables.background,
    margin: '10px 0',
    padding: 10,
    display: visibility
  }
})

class Update extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    permissions: PropTypes.array.isRequired
  }

  state = {
    visibleEditForm: false
  }

  handleClick = () => {
    this.setState(prevState => {
      return { visibleEditForm: !prevState.visibleEditForm }
    })
  }

  _hideUpdateForm = () => {
    this.setState({ visibleEditForm: false })
  }

  render() {
    return (
      <div>
        <StyledEditForm visible={this.state.visibleEditForm}>
          <Title key="title">Update Product</Title>
          <UpdateProductContainer
            {...this.props}
            onUpdateSuccess={this._hideUpdateForm}
          />
        </StyledEditForm>
        <button onClick={this.handleClick}>Update</button>
      </div>
    )
  }
}

export default Update
