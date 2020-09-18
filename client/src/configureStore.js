import { applyMiddleware, createStore } from "redux"
import thunkMiddleware from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"

import rootReducer from "./reducer"

// Middleware
const loggerMiddleware = (store) => (next) => (action) => {
    console.group(action.type)
    console.info("dispatching", action)
    let result = next(action)
    console.log("next state", store.getState())
    console.groupEnd()
    return result
}

export default function configureStore(preloadedState) {
    const middlewares = [loggerMiddleware, thunkMiddleware]
    const middlewareEnhancer = applyMiddleware(...middlewares)

    const enhancers = [middlewareEnhancer]
    const composedEnhancers = composeWithDevTools(...enhancers)

    const store = createStore(rootReducer, preloadedState, composedEnhancers)

    return store
}
