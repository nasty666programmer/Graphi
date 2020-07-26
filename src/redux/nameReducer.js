import { CREATE_NAME } from "./types";


const initialState = {
    names: [],
}

 const nameReducer = (state=initialState,action) => {
    switch(action.type) {
        case CREATE_NAME: return {...state,  names: state.names.concat([action.payload])}
        default: return state

    }
    return state
}

export default nameReducer;