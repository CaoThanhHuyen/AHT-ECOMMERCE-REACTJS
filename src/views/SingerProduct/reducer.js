import { ActionTypes } from "./action";

const DEFAULT_STATE = {
    product: []
}

const ProductReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case ActionTypes.GET_PRODUCT_SUCCESS:
            return {
                ...state,
                product: action.payload
            }
    
        default:
            return state;
    }
}

export default ProductReducer;