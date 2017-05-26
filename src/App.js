import React, { Component } from 'react';
//CSS
import './App.css';
import './css/semantic-ui-css/semantic.css'
//JSON data
import data from './datas/data'
//Components
import GamesSelector from './components/GamesSelector'
import PlayersSelector from './components/PlayersSelector'
import GetImage from './components/GetImage'
//background image
const background = './images/background.jpg'

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
        <div>
          <div className="selector">
              <GamesSelector selectedGame={this.state.selectedGame} data={data} onChangeGames={this.onChangeGames} />
              <PlayersSelector selectedPlayer={this.state.selectedPlayer} data={data} onChangePlayer={this.onChangePlayer} />
          </div>
          <div className="image">
            <img className="background" src={background} alt="games"/>
            <GetImage data={data} selected={this.state}/>
          </div>
        </div>
    );
  }
}

export default App;
