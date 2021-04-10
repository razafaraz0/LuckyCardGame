const matchIDReducer = (state = 0, action) => {
    switch(action.type){
        case 'SET_MATCHID':
            return action.payload;
        default:
            return state;
    }
}

export default matchIDReducer;