import React from 'react'
import glamorous from 'glamorous'
import variables from '../styles/variables'

const StyledForm = glamorous.form({
  marginBottom: 20
})

const StyledLabel = glamorous.label({
  display: 'flex',
  lineHeight: '23px',
  marginBottom: 5,
  width: 250,
  justifyContent: 'space-between',
  '& input': {
    fontSize: variables.fontSize
  }
})

const ProductForm = props => {
  return (
    <StyledForm onSubmit={props.handleSubmit}>
      <StyledLabel>
        Name:
        <input
          value={props.name}
          onChange={props.handleChange}
          placeholder="Name"
          type="text"
          name="name"
        />
      </StyledLabel>
      <StyledLabel>
        Price:
        <input
          onChange={props.handleChange}
          placeholder="Price"
          value={props.price}
          type="number"
          name="price"
        />
      </StyledLabel>
      <StyledLabel>
        Currency:
        <input
          onChange={props.handleChange}
          placeholder="Currency"
          value={props.currency}
          type="text"
          name="currency"
          maxLength="3"
        />
      </StyledLabel>
      <button type="submit">Submit</button>
    </StyledForm>
  )
}

export default ProductForm
