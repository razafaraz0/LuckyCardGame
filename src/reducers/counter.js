// Counter Reducer : Tells which player'sturn it is
const counterReducer = (state = 0, action) => {
    switch(action.type){
        case 'INCREMENT':
            state++;
            return state % action.payload;
        default:
            return state;
    }
}

export default counterReducer;