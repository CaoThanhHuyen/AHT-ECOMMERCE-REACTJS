export const ActionTypes = {
    GET_PRODUCTS: 'GET_PRODUCTS',
    GET_PRODUCTS_SUCCESS: 'GET_PRODUCTS_SUCCESS',
    GET_PRODUCTS_ERROR: 'GET_PRODUCTS_ERROR'
}

export function getProducts(idCate){
    return {
        type: ActionTypes.GET_PRODUCTS,
        payload: idCate
    }
}

export function getProductsSuccess(data) {
    return {
        type: ActionTypes.GET_PRODUCTS_SUCCESS,
        payload: data
    }
}

export function getProductsError(err) {
    return {
        type: ActionTypes.GET_PRODUCTS_ERROR,
        payload: err
    }
}