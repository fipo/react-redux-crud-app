import React from 'react'
import glamorous from 'glamorous'
import variables from '../styles/variables'

const StyledTitle = glamorous.h1({
  fontWeight: variables.title.weight,
  fontSize: variables.title.fontSize,
  marginBottom: 10
})

const Title = props => <StyledTitle>{props.children}</StyledTitle>

export default Title
