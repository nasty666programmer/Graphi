import { combineReducers } from "redux";
import nameReducer from './nameReducer'

export const rootReducer = combineReducers({
    nameUser: nameReducer
})
