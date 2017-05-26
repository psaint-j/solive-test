import React from 'react'

export default class GamesSelector extends React.Component{
  render(){

    //return team Name
    const getTeamById = (data, id) =>{
      var name = null
      data.teams.map(team => {
        if (team.id === id)
          return name = team.name
      return null
      })
      return (name)
    }

    //return list of games available
    const getGame = (data) =>{
      return data.games.map((res, index) =>{
        return <option key={index} value={index}>{getTeamById(data, res.homeTeamScore.teamId) + ' vs ' + getTeamById(data, res.awayTeamScore.teamId)}</option>
      })
    }

    return(
      <div className="ui form">
        <div className="field">
          <select className="ui fluid dropdown" onChange={this.props.onChangeGames}>
            {getGame(this.props.data)}
          </select>
        </div>
      </div>
    )
  }
}
