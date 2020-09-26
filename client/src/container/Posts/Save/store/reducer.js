import { fromJS, Map } from "immutable"
import Post from "../../../../models/Posts/post"

import {CONNECTION_ERROR, API_ERROR} from "../../../../services/Api/Errors"

import { createReducer } from "../../../../services/Reducers/utilities"

let initialState = fromJS({
    post: null,
    loading: false,
    error: null,
    saved: null, 
    loaded: null
})

/**
 * Resets the state by returning the initialstate
 */
function reset() {
    return initialState
}

function startAction(immutableState, action) {
    let newImmutableState = immutableState
    newImmutableState = newImmutableState.set("loading", true)
    return newImmutableState
}

function savePostSuccess(immutableState, action) {
    let newImmutableState = immutableState
    if (action.payload.status != 0) {
        newImmutableState = newImmutableState.set("error", fromJS({
            status: API_ERROR
        }))
    } else {
        newImmutableState = newImmutableState.set("error", null)
    }
    newImmutableState = newImmutableState.set(
        "post",
        fromJS(action.payload.items[0])
    )
    newImmutableState = newImmutableState.set("loading", false)
    newImmutableState = newImmutableState.set("saved", true)

    return newImmutableState
}

function savePostFail(immutableState, action) {
    let newImmutableState = immutableState
    newImmutableState = newImmutableState.set("loading", false)
    newImmutableState = newImmutableState.set("saved", false)
    newImmutableState = newImmutableState.set("error", fromJS({
        status: CONNECTION_ERROR
    }))
    return newImmutableState
}

function fetchPostSuccess(immutableState, action) {
    let newImmutableState = immutableState
    if (action.payload.status != 0) {
        newImmutableState = newImmutableState.set("error", fromJS({
            status: API_ERROR
        }))
    } else {
        newImmutableState = newImmutableState.set("error", null)
    }
    newImmutableState = newImmutableState.set(
        "post",
        fromJS(action.payload.items[0])
    )
    newImmutableState = newImmutableState.set("loading", false)
    newImmutableState = newImmutableState.set("loaded", true)

    return newImmutableState
}

const listReducer = createReducer(initialState, {
    POST_RESET: reset,
    SAVE_POST_START: startAction,
    SAVE_POST_SUCCESS: savePostSuccess,
    SAVE_POST_FAIL: savePostFail,

    
    FETCH_POST_START: startAction,
    FETCH_POST_SUCCESS: fetchPostSuccess,
    FETCH_POST_FAIL: savePostFail,
    
})

export default listReducer