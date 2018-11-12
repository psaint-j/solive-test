import React from 'react'
import { Consumer } from './gameContext'


const withGameContext = Component => props => (
  <Consumer>
    {context => <Component {...props} {...context} />}
  </Consumer>
)

export default withGameContext
