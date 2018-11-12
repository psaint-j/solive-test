import React from 'react'
import withGameContext from '../Hoc/withGameContext'

const GetImage = ({data, state, onChangeGames, onChangePlayer}) => {
    //return TeamName
    const getTeamNameByID = (data, id) => {
      var  teamName = null
      data.teams.forEach(team => {
        if (team.id === id)
          teamName = team.name
      })
      return (teamName)
    }

    //return path Team

    const getTeamPathByID = (data, id) => {
      var teamPath = null
      data.medias.forEach(media => {
        if (media.type === 'logo')
          if(media.teamId === id)
            teamPath = media.path
      })
      return (teamPath)
    }

    //return path Player

    const getPlayerPathByID = (data, id) => {
      var playerPath = null
      data.medias.forEach(media => {
        if (media.type === 'player')
          if(media.playerId === id)
            playerPath = media.path
      })
      return (playerPath)
    }

    //return date string

    const  dateConverter = (timestamp) => {
      var a = new Date(timestamp * 1000);
      var months = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];
      var year = a.getFullYear();
      var month = months[a.getMonth()];
      var date = a.getDate();
      var time = date + ' ' + month + ' ' + year;
      return time;
    }

     //object awayTeamScore / homeTeamScore / players

    var awayObj =    data.games[state.selectedGame].awayTeamScore
    var homeObj =    data.games[state.selectedGame].homeTeamScore
    var playerObj =  data.players[state.selectedPlayer]

    //get path

    var awayTeamPath =  getTeamPathByID(data, awayObj.teamId)
    var homeTeamPath =  getTeamPathByID(data, homeObj.teamId)
    var playerPath =    getPlayerPathByID(data, playerObj.id)
    var playerTeamName = getTeamNameByID(data, playerObj.teamId)

    return(
      <div>
        <img className={'player ' + playerObj.lastName} src={playerPath} alt={playerObj.lastName}/>
        <img className="team hometeam" src={homeTeamPath} alt={getTeamNameByID(data, homeObj.teamId)} />
        <img className="team awayteam" src={awayTeamPath} alt={getTeamNameByID(data, awayObj.teamId)} />
        <p className="playerName">{playerObj.lastName.toUpperCase()}</p>
        <p className="playerTeamName">{playerTeamName.toUpperCase()}</p>
        <p className="gameDate">{dateConverter(data.games[state.selectedGame].timestamp)}</p>
        <p className="score">
          {homeObj.score + ' - ' + awayObj.score}
        </p>
      </div>
    )
}

export default withGameContext(GetImage)
