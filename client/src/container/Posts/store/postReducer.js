import { combineReducers } from "redux-immutable"
import listReducer from "../List/store/reducer"
import saveReducer from "../Save/store/reducer"

const rootReducer = combineReducers({
    list: listReducer, 
    save: saveReducer
})

export default rootReducer
