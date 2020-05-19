export const ActionTypes = {
    GET_CATEGORIES: 'GET_CATEGORIES',
    GET_CATEGORIES_SUCCESS: 'GET_CATEGORIES_SUCCESS',
    GET_CATEGORIES_ERROR: 'GET_CATEGORIES_ERROR',

    SET_ACTIVE_CATEGORIES: 'SET_ACTIVE_CATEGORIES'
}

export function getCategories() {
    return {
        type: ActionTypes.GET_CATEGORIES
    }
}

export function getCategoriesSuccess(data) {
    return {
        type: ActionTypes.GET_CATEGORIES_SUCCESS,
        payload: data
    }
}

export function getCategoriesError(err) {
    return {
        type: ActionTypes.GET_CATEGORIES_ERROR,
        payload: err
    }
}

export function setActiveCategories(id) {
    return {
        type: ActionTypes.SET_ACTIVE_CATEGORIES,
        payload: id
    }
}