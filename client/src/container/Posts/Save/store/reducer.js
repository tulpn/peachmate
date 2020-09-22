import { fromJS, Map } from "immutable"
import Post from "../../../../models/Posts/post"

import {CONNECTION_ERROR} from "../../../../services/Api/Errors"

import { createReducer } from "../../../../services/Reducers/utilities"

let initialState = fromJS({
    post: null,
    loading: false,
    savePostError: null,
    savePostSuccess: null,
    savePostFinished: null,
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

function savePostSuccess(immutableState, action) {
    let newImmutableState = immutableState
    if (action.payload.status != 0) {
        newImmutableState = newImmutableState.set(
            "savePostError",
            true
        )
        newImmutableState = newImmutableState.set("savePostSuccess", false)
        newImmutableState = newImmutableState.set("savePostFinished", true)
    } else {
        newImmutableState = newImmutableState.set("savePostError", false)
        newImmutableState = newImmutableState.set("savePostSuccess", true)
        newImmutableState = newImmutableState.set("savePostFinished", true)
    }
    newImmutableState = newImmutableState.set(
        "post",
        fromJS(action.payload.items[0])
    )
    newImmutableState = newImmutableState.set("loading", false)

    return newImmutableState
}

function savePostFail(immutableState, action) {
    let newImmutableState = immutableState
    newImmutableState = newImmutableState.set("loading", false)
    newImmutableState = newImmutableState.set("error", CONNECTION_ERROR)
    newImmutableState = newImmutableState.set("savePostError", true)
    newImmutableState = newImmutableState.set("savePostSuccess", false)
    newImmutableState = newImmutableState.set("savePostFinished", true)
    return newImmutableState
}

const listReducer = createReducer(initialState, {
    POST_RESET: reset,
    SAVE_POST_START: startAction,
    SAVE_POST_SUCCESS: savePostSuccess,
    SAVE_POST_FAIL: savePostFail,
    
})

export default listReducer