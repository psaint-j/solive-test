import React from "react"
import { Consumer } from "./GameContext";

export const withGameContext = Component => props => (
  <Consumer>
    {context => <Component {...props} {...context}/> }
  </Consumer>
)
