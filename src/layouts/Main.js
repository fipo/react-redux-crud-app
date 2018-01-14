import React from 'react'
import glamorous from 'glamorous'

const Wrapper = glamorous.div({
  maxWidth: 720,
  margin: '0 auto'
})

const Main = props => (
  <div>
    <Wrapper className="App">{props.children}</Wrapper>
  </div>
)

export default Main
