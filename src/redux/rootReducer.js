import { combineReducers } from "redux";
import nameReducer from './nameReducer'


 const rootReducer = combineReducers({
    names: nameReducer,
    
});

export default rootReducer