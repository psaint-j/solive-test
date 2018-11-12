import React, { Component, createContext, useState } from 'react';


export const { Provider, Consumer } = createContext()

const GameContext = ({children}) => {

  const selectedGame = useInputValue(0);
  const selectedPlayer = useInputValue(0);

  return (
    <Provider value={
      {
        state: {selectedGame: selectedGame.value, selectedPlayer: selectedPlayer.value},
        onChangeGames: selectedGame.onChange,
        onChangePlayer: selectedPlayer.onChange,
      }
    }>
      {children}
    </Provider>
  )
}


export default GameContext



 /// new file

const useInputValue = (initalValue) => {
  const [value, setValue] = useState(initalValue);
  const handleChangeInput = (e) => {
    setValue(e.target.value)
  }

  return {
    value: value,
    onChange: handleChangeInput
  }
}
