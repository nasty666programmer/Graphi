import { CREATE_NAME } from "./types";

const initialState = {
    name:[]
}

 const nameReducer = (state=initialState,action) => {
     switch(action.type) {
         case CREATE_NAME: return {...state, name: state.name.concat([action.payload])}
         dafault: return state
     }
    return state
}

export default nameReducer;