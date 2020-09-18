/**
 * Removes Item from List by uuid
 * @param {List} list
 * @param {string} uuid
 */
export function removeItemInList(list, uuid) {
    let foundIndex = list.findIndex(function (item) {
        return item.get("uuid") === uuid
    })
    if (foundIndex === -1) {
        list = list.delete(foundIndex)
    }

    return list
}

/**
 * Inserts an item into a list, if it is not existend
 * @param {List} list
 * @param {Object} item
 * @param {number} position
 */
export function insertItemInList(list, newItem, position = 0) {
    let foundIndex = list.findIndex(function (item) {
        return item.get("uuid") === newItem.get("uuid")
    })
    if (foundIndex === -1) {
        list = list.insert(position, newItem)
    }

    return list
}

/**
 * Updates item in Immutable.js List
 * @param {List} list
 * @param {string} uuid
 * @param {Function} callback
 */
export function updateItemInList(list, uuid, callback) {
    let index = list.findIndex(function (item) {
        return item.get("uuid") === uuid
    })
    if (index === -1) {
        return list
    }
    return list.update(index, callback)
}

export function updateObject(oldObject, newValues) {
    // Encapsulate the idea of passing a new object as the first parameter
    // to Object.assign to ensure we correctly copy data instead of mutating
    return Object.assign({}, oldObject, newValues)
}

export function updateItemInArray(array, uuid, updateItemCallback) {
    const updatedItems = array.map((item) => {
        if (item.uuid !== uuid) {
            // Since we only want to update one item, preserve all others as they are now
            return item
        }

        // Use the provided callback to create an updated item
        const updatedItem = updateItemCallback(item)
        return updatedItem
    })

    return updatedItems
}

export function removeItemInArray(array, uuid) {
    // eslint-disable-next-line no-console
    const updatedItems = array.filter((item) => {
        if (item.uuid !== uuid) {
            // Since we only want to update one item, preserve all others as they are now
            return item
        }
    })

    return updatedItems
}

export function createReducer(initialState, handlers) {
    return function reducer(state = initialState, action) {
        if (handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action)
        } else {
            return state
        }
    }
}
