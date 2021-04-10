    import counterReducer from './counter';
    import matchIDReducer from './matchID';
    import gameStateReducer from './gameState';
    import { combineReducers } from 'redux';


    const allReducers = combineReducers({
        counter : counterReducer,
        matchID : matchIDReducer,
        isGameOver : gameStateReducer
    })

    export default allReducers;