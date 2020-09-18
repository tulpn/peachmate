import { combineReducers } from "redux-immutable"
import { reducer as formReducer } from "redux-form/immutable"


// Redux Stores
const rootReducer = combineReducers({
    
    // you have to pass formReducer under 'form' key,
    form: formReducer,
})

export default rootReducer
