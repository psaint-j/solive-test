import React from 'react'
import withGameContext from '../Hoc/withGameContext'
import GamesSelector from './GamesSelector'
import PlayersSelector from './PlayersSelector'

const Selector = ({data, state, onChangeGames, onChangePlayer}) => {
    return(
      <div className="selector">
          <GamesSelector selectedGame={state.selectedGame} data={data} onChangeGames={onChangeGames} />
          <PlayersSelector selectedPlayer={state.selectedPlayer} data={data} onChangePlayer={onChangePlayer} />
      </div>
    )
}

export default withGameContext(Selector)
