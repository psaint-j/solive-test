import React from "react";
import GamesSelector from './GamesSelector';
import PlayersSelector from './PlayersSelector';
import { withGameContext } from '../Hoc/withGameContext';



export const Selector = withGameContext(({data, state, onChangeGames, onChangePlayer}) => (
  <div className="selector">
      <GamesSelector selectedGame={state.selectedGame} data={data} onChangeGames={onChangeGames} /> //Provider
      <PlayersSelector selectedPlayer={state.selectedPlayer} data={data} onChangePlayer={onChangePlayer} />
  </div>
))
