import { combineReducers } from "redux-immutable"
import listReducer from "../List/store/reducer"

const rootReducer = combineReducers({
    list: listReducer
})

export default rootReducer
