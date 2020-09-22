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

export const _deletePostStart = () => {
    return {
        type: "DELETE_POST_START",
    }
}

export const _deletePostSuccess = (payload) => {
    return {
        type: "DELETE_POST_SUCCESS",
        payload: payload,
    }
}

export const _deletePostFail = () => {
    return {
        type: "DELETE_POST_FAIL",
    }
}

export const deletePost = (id) => {
    return (dispatch) => {
        dispatch(_deletePostStart())
        return ApiPostStore.deleteItemById(id)
            .then((response) => {
                dispatch(_deletePostSuccess(response.data))
            })
            .catch((error) => {
                dispatch(_deletePostFail())
            })
    }
}


export const updatePostStart = () => {
    return {
        type: "UPDATE_POST_START",
    }
}

export const updatePostSuccess = (payload) => {
    return {
        type: "UPDATE_POST_SUCCESS",
        payload: payload,
    }
}

export const updatePostFail = () => {
    return {
        type: "UPDATE_POST_FAIL",
    }
}

export const cancelPost = (postData) => {
    postData = {
        ...postData,
        status: "cancelled"
    }
    return (dispatch) => {
        dispatch(updatePostStart())
        return ApiPostStore.update(postData)
            .then((response) => {
                dispatch(updatePostSuccess(response.data))
            })
            .catch((error) => {
                dispatch(updatePostFail())
            })
    }
}



export const shareNow = (postData) => {
    postData = {
        ...postData,
        status: "shareNow"
    }
    return (dispatch) => {
        dispatch(updatePostStart())
        return ApiPostStore.update(postData)
            .then((response) => {
                dispatch(updatePostSuccess(response.data))
            })
            .catch((error) => {
                dispatch(updatePostFail())
            })
    }
}