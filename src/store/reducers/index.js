import { combineReducers } from "redux";
import modulePicked from './modulePicked_reducer'
import connectionStatus from "./connectionStatus_reducer";

const rootReducer = combineReducers({
    modulePicked,
    connectionStatus
});

export default rootReducer;