export const increment = (max) => {
    return {
        type : 'INCREMENT',
        payload : max
    }
}

export const setMatchID = (id) => {
    return {
        type : 'SET_MATCHID',
        payload : id
    }
}

export const changeGameState = () => {
    return {
        type : 'GAMEOVER'
    }
}
