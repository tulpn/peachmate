import { fromJS, Map } from "immutable"
import Post from "../../../../models/Posts/post"

import {CONNECTION_ERROR, API_ERROR} from "../../../../services/Api/Errors"

import { createReducer } from "../../../../services/Reducers/utilities"

let initialState = fromJS({
    posts: [],
    loading: false,
    error: null,
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

function fetchAllSuccess(immutableState, action) {
    let newImmutableState = immutableState
    if (action.payload.status != 0) {
        newImmutableState = newImmutableState.set("error", fromJS({
            status: API_ERROR
        }))
    } else {
        newImmutableState = newImmutableState.set("error", null)
    }
    newImmutableState = newImmutableState.set(
        "posts",
        fromJS(action.payload.items)
    )
    newImmutableState = newImmutableState.set("loading", false)

    return newImmutableState
}

function fetchAllFail(immutableState, action) {
    let newImmutableState = immutableState
    newImmutableState = newImmutableState.set("loading", false)
    newImmutableState = newImmutableState.set("error", fromJS({
        status: CONNECTION_ERROR
    }))
    return newImmutableState
}

const listReducer = createReducer(initialState, {
    POSTS_RESET: reset,
    FETCH_ALL_START: startAction,
    FETCH_ALL_SUCCESS: fetchAllSuccess,
    FETCH_ALL_FAIL: fetchAllFail,
    
})

export default listReducer