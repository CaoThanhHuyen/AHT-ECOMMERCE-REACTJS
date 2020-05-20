export const ActionTypes = {
    GET_PRODUCT: 'GET_PRODUCT',
    GET_PRODUCT_SUCCESS: 'GET_PRODUCT_SUCCESS',
    GET_PRODUCT_ERROR: 'GET_PRODUCT_ERROR' 
}

export function getProduct(idProd) {
    return {
        type: ActionTypes.GET_PRODUCT,
        payload: idProd
    }
}

export function getProductSuccess(data) {
    return {
        type: ActionTypes.GET_PRODUCT_SUCCESS,
        payload: data
    }
}

export function getProductError(err) {
    return {
        type: ActionTypes.GET_PRODUCT_ERROR,
        payload: err
    }
}