const gameStateReducer = (state = false, action) => {
    switch(action.type){
        case 'GAMEOVER':
            return !state;
        default:
            return state;
    }
}

export default gameStateReducer;