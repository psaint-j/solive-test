import React, { Component } from 'react';
//CSS
import './App.css';
import './css/semantic-ui-css/semantic.css'
//JSON data
import data from './datas/data'
//Components
import { Selector } from  "./components/selector";
import GetImage from './components/GetImage'
//HOC
import { GameContext, Consumer } from './Hoc/GameContext';
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
        <GameContext>
          <Selector data={data}/>
          <div className="image">
            <img className="background" src={background} alt="games"/>
            <GetImage data={data} /> //Provider
          </div>
        </GameContext>
    );
  }
}

export default App;
