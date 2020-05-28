export const ActionTypes = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_CART: 'REMOVE_CART',
    UPDATE_CART: 'UPDATE_CART'
}

export function addToCart(product, color, material, quantity) {
    return {
        type: ActionTypes.ADD_TO_CART,
        payload: product, color, material, quantity
    }
}

export function updateCart(id, quantity) {
    return {
        type: ActionTypes.UPDATE_CART,
        payload: id, quantity
    }
}

export function removeCart(idCart) {
    return {
        type: ActionTypes.REMOVE_CART,
        payload: idCart
    }
}
