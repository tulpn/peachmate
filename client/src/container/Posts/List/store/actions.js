import {ApiPostStore} from "../../../../services/Api/Endpoints/"

export const _reset = () => {
    return {
        type: "POSTS_RESET",
    }
}

export const _fetchAllStart = (payload) => {
    return {
        type: "FETCH_ALL_START",
        payload: payload,
    }
}

export const _fetchAllSuccess = (payload) => {
    return {
        type: "FETCH_ALL_SUCCESS",
        payload: payload,
    }
}

export const _fetchAllFail = () => {
    return {
        type: "FETCH_ALL_FAIL",
    }
}

export const fetchPosts = () => {
    return (dispatch) => {
        dispatch(_fetchAllStart())
        ApiPostStore.fetchAll()
            .then((response) => {
                dispatch(_fetchAllSuccess(response.data))
            })
            .catch((error) => {
                dispatch(_fetchAllFail(error))
            })
    }
}