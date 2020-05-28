export const ActionTypes = {
    GET_WISH_LIST: 'GET_WISH_LIST',
    ADD_WISH_LIST: 'ADD_WISH_LIST',
    REMOVE_WISH_LIST: 'REMOVE_WISH_LIST'
}

export function getWishList() {
    return {
        type: ActionTypes.GET_WISH_LIST,
    }
}

export function addWishList(product) {
    return {
        type: ActionTypes.ADD_WISH_LIST,
        payload: product
    }
}

export function removeWishList(idProduct) {
    return {
        type: ActionTypes.REMOVE_WISH_LIST,
        payload: idProduct
    }
}