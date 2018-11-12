import React, { Component, createContext} from "react";


export const { Provider, Consumer } = createContext();

export class GameContext extends Component {
  state = {
    selectedGame:0,
    selectedPlayer:0
  }

  //set the current game value
   onChangeGames = (e) =>{
       const selectedGame = e.target.value
       this.setState({selectedGame})
   }

 //set the current player value
   onChangePlayer = (e) =>{
       const selectedPlayer = e.target.value
       this.setState({selectedPlayer})
   }

  render() {
    return (
      <Provider value={{state: this.state, onChangeGames:this.onChangeGames, onChangePlayer:this.onChangePlayer}}>
        {this.props.children}
      </Provider>
    )
  }
}
