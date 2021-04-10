// Action to increment 
export const increment = (max) => {
    return {
        type : 'INCREMENT',
        payload : max
    }
}
// Action to Set MatchID
export const setMatchID = (id) => {
    return {
        type : 'SET_MATCHID',
        payload : id
    }
}

// Action to change gameState
export const changeGameState = () => {
    return {
        type : 'GAMEOVER'
    }
}
