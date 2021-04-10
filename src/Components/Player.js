import axios from 'axios';
import React, { Component } from 'react'
import PropTypes from "prop-types";

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import { CardActions } from '@material-ui/core';

import { increment, changeGameState} from '../actions';
import {connect} from 'react-redux'

import '../style/player.scss';

// CREATING A RANDOM NUMBER BETWEEN 1 AND 6 
const getRandomInteger = (min, max) =>
                        Math.floor(Math.random() * (max - min + 1)) + min;

class Player extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            individualScore : 0,
            open : false
        };
      }

      componentDidUpdate(){
        // IF CURRENT SCORE IS GREATE THEN OBJECTIVE SCORE THEN SEND POST REUEST
        if (this.state.individualScore >= this.props.scoreTowin ){
          axios.post('http://localhost:8000/api/game', {
            matchId: this.props.matchID,
            winnerId: this.props.playerID
          })
          .then(res => {
            this.setState({individualScore : 0,open : true})
          })
        }
      }

      //ROLL FUNCTION THAT UPDATES THE TURN OF WHICH PLAYER IT IS & THE RESPECTIVE SCORE
      roll(){
        this.props.dispatch(increment(parseInt(this.props.totalPlayerCount)));
        this.setState(
          {individualScore : this.state.individualScore + getRandomInteger(1, 6)}
        );
      }

      //CALLED WHEN DIALOG BOX IS CLSOED
      handleClose (e) {
        this.setState({open : false})
      }

      render() {
        return (
            <div>
              {/* CARD OF AN INDIVIDUAL PLAYER */}
              <Card class='playerCard'>
                  <CardContent>
                      <Typography>{this.props.name}</Typography>
                  </CardContent>
                  <CardMedia
                    class='playerCard-Avatar'
                    component='img'
                    image={this.props.avatar}  
                  />
                  <CardContent>
                      <Typography>Score : {this.state.individualScore}</Typography>
                  </CardContent>
                  <CardActions>
                      <Button
                          color="primary"
                          variant="contained"
                          styles = {{width:'5px'}}
                          disabled = {this.props.playerIndex !== this.props.playerTurn}
                          onClick={() => {
                                  this.roll();
                              }}>
                                  Roll
                          </Button> 
                  </CardActions>
              </Card>

              {/* DIALOG BOX THAT POPS UP WHEN THAT PLAYER WINS */}
              <Dialog class='winDialog' open={this.state.open}  >
                <DialogTitle className='winDialog-Title'>
                  CONGRATULATIONS!!!!!
                </DialogTitle>
                <CardMedia
                    class='winDialog-Avatar'
                    component='img'
                    image={this.props.avatar}
                  />
                <DialogTitle className='winDialog-Title'>
                    {this.props.name} WINS !!!
                </DialogTitle>
                <DialogActions className='winDialog-Button' >
                  <Button onClick={
                                  () => {
                                    this.setState({open : false});
                                    this.props.dispatch(changeGameState());
                                }
                  } color="primary"
                    variant="contained">
                    Play AGAIN
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return { 
      playerTurn : state.counter,
      matchID: state.matchID,
      isGameOver: state.isGameOver
    };
  }


Player.propTypes = {
    playerID: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    playerIndex: PropTypes.number.isRequired,
    totalPlayerCount: PropTypes.number.isRequired,
    scoreTowin:PropTypes.number.isRequired
  };

export default connect(mapStateToProps)(Player);