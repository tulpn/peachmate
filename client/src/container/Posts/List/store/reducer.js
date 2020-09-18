import { fromJS, Map } from "immutable"
import Post from "../../../../models/Posts/post"

import {CONNECTION_ERROR} from "../../../../services/Api/Errors"

import { createReducer } from "../../../../services/Reducers/utilities"

let initialState = fromJS({
    posts: [],
    loading: false,
    fetchAllError: null,
    fetchAllSuccess: null,
    fetchAllFinished: null,
    error: ""
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
        newImmutableState = newImmutableState.set(
            "fetchAllError",
            true
        )
        newImmutableState = newImmutableState.set("fetchAllSuccess", false)
        newImmutableState = newImmutableState.set("fetchAllFinished", true)
    } else {
        newImmutableState = newImmutableState.set("fetchAllError", false)
        newImmutableState = newImmutableState.set("fetchAllSuccess", true)
        newImmutableState = newImmutableState.set("fetchAllFinished", true)
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
    newImmutableState = newImmutableState.set("error", CONNECTION_ERROR)
    newImmutableState = newImmutableState.set("fetchAllError", true)
    newImmutableState = newImmutableState.set("fetchAllSuccess", false)
    newImmutableState = newImmutableState.set("fetchAllFinished", false)
    return newImmutableState
}

const listReducer = createReducer(initialState, {
    POSTS_RESET: reset,
    FETCH_ALL_START: startAction,
    FETCH_ALL_SUCCESS: fetchAllSuccess,
    FETCH_ALL_FAIL: fetchAllFail,
    
})

export default listReducer