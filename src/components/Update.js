import React, { Component } from 'react'
import UpdateProductContainer from '../containers/UpdateProductContainer'
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

const Title = glamorous.h2({
  fontSize: variables.title.fontSize,
  fontWeight: variables.title.weight,
  marginBottom: 10
})

class Update extends Component {
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
