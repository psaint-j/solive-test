import React, { Component } from 'react';
import GameContext, { Consumer } from './Hoc/gameContext'
//CSS
import './App.css';
import './css/semantic-ui-css/semantic.css'
//JSON data
import data from './datas/data'
//Components

import GetImage from './components/GetImage'
import Selector from './components/Selector'
//background image
const background = './images/background.jpg'

// HOC

class App extends Component {

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
        <GameContext>
          <Selector data={data} />
          <Consumer>
            {value => (
              <div>{value.state.selectedGame}</div>
            )}
          </Consumer>
          <div className="image">
            <img className="background" src={background} alt="games"/>
            <GetImage data={data} selected={this.state}/>
          </div>
        </GameContext>
    );
  }
}

export default App;
