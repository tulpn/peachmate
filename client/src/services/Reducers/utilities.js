/**
 * Removes Item from List by id
 * @param {List} list
 * @param {string} id
 */
export function removeItemInList(list, id) {
    return list.filter(item => {
        return item.get("id") !== id
    })
}

/**
 * Inserts an item into a list, if it is not existend
 * @param {List} list
 * @param {Object} item
 * @param {number} position
 */
export function insertItemInList(list, newItem, position = 0) {
    let foundIndex = list.findIndex(function (item) {
        return item.get("id") === newItem.get("id")
    })
    if (foundIndex === -1) {
        list = list.insert(position, newItem)
    }

    return list
}

/**
 * Updates item in Immutable.js List
 * @param {List} list
 * @param {string} id
 * @param {Function} callback
 */
export function updateItemInList(list, id, callback) {
    let index = list.findIndex(function (item) {
        return item.get("id") === id
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

export function updateItemInArray(array, id, updateItemCallback) {
    const updatedItems = array.map((item) => {
        if (item.id !== id) {
            // Since we only want to update one item, preserve all others as they are now
            return item
        }

        // Use the provided callback to create an updated item
        const updatedItem = updateItemCallback(item)
        return updatedItem
    })

    return updatedItems
}

export function removeItemInArray(array, id) {
    // eslint-disable-next-line no-console
    const updatedItems = array.filter((item) => {
        if (item.id !== id) {
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
