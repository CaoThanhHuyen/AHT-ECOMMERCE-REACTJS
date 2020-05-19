export const ActionTypes = {
    GET_CATEGORIES: 'GET_CATEGORIES',
    GET_CATEGORIES_SUCCESS: 'GET_CATEGORIES_SUCCESS',
    GET_CATEGORIES_ERROR: 'GET_CATEGORIES_ERROR'
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