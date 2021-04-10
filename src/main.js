import axios from 'axios';
import Player from './Components/Player';
import React, { Component } from 'react';

import {connect} from 'react-redux'
import {setMatchID, changeGameState} from './actions';

import "./style/main.scss";

class Main extends Component{
   constructor(props) {
       super(props);
       this.state = { 
           matchID : "",
           players : [],
           scoreToWin : 0,
           numberOfPlayers : 1
       };
     }
         
   componentDidMount(){
    // AXIOS GET REQUEST 
       axios.get(`http://localhost:8000/api/game`)
       .then(res => {
           const matchData = res.data;
           this.setState({ 
               matchID : matchData.matchId,
               players : matchData.players,
               scoreToWin : matchData.scoreToWin,
               numberOfPlayers : matchData.players.length
            })
            this.props.dispatch(setMatchID(this.state.matchID));
       })
   }

   componentDidUpdate(){
    // RELOAD THE WHOLE WEBPAGE IF THE USER WANTS TO PLAY AGAIN
       if(this.props.isGameOver){
            this.props.dispatch(changeGameState());
            window.location.reload();
       } 
    }

   render(){
       return(
           <div class="game">
                <p>Match ID : {this.props.matchID}</p>
                <h1 class='game-title'>THE LUCKY ONE</h1>
                <h3 class="game-scoreToWin">Score to win: {this.state.scoreToWin}</h3>
                <div class="allPlayerCards">
                    {/* TRAVERSING OVER ALL THE PLAYERS FROM THE REQUEST AND CREATING COMPONENTS DYNAMICALL*/}
                    {(this.state.players).map( (player, index) =>
                        <Player 
                            key={player.id}
                            playerID={player.id}
                            name={player.name}
                            avatar={player.imageUrl}
                            playerIndex={index}
                            totalPlayerCount={this.state.numberOfPlayers} 
                            scoreTowin={this.state.scoreToWin}
                        />)}             
                </div>
            </div>
        );
    }
}

// MAPS REDUX TO STATE
function mapStateToProps(state) {
    return { 
        matchID: state.matchID,
        isGameOver: state.isGameOver
    };
}

export default connect(mapStateToProps)(Main);