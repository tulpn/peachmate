import {ApiPostStore} from "../../../../services/Api/Endpoints/"

export const _reset = () => {
    return {
        type: "POST_RESET",
    }
}

export const _savePostStart = () => {
    return {
        type: "SAVE_POST_START",
    }
}

export const _savePostSuccess = (payload) => {
    return {
        type: "SAVE_POST_SUCCESS",
        payload: payload,
    }
}

export const _savePostFail = () => {
    return {
        type: "SAVE_POST_FAIL",
    }
}

export const savePost = (postData) => {
    return (dispatch) => {
        dispatch(_savePostStart())
        return ApiPostStore.save(postData)
            .then((response) => {
                dispatch(_savePostSuccess(response.data))
            })
            .catch((error) => {
                dispatch(_savePostFail())
            })
    }
}