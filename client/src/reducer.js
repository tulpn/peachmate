import { combineReducers } from "redux-immutable"
import { reducer as formReducer } from "redux-form/immutable"

import postReducer from "./container/Posts/store/postReducer"

// Redux Stores
const rootReducer = combineReducers({
    posts: postReducer,
    // you have to pass formReducer under 'form' key,
    form: formReducer,
})

export default rootReducer
