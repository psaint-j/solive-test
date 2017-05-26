import React from 'react'

export default class PlayersSelector extends React.Component{
  render(){
    //return list of players available
    const getPlayer = (data) =>{
      return data.players.map((res, index) =>{
        return <option key={index} value={index}>{res.firstName + ' ' + res.lastName}</option>
      })
    }

    return(
      <div className="ui form">
        <div className="field">
          <select className="ui fluid dropdown" onChange={this.props.onChangePlayer}>
            {getPlayer(this.props.data)}
          </select>
        </div>
      </div>
    )
  }
}
