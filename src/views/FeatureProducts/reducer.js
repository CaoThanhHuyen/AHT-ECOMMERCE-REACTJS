import { ActionTypes } from "./actions";

const DEFAULT_STATE = {
    listProducts: []
} 

const ProductReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case ActionTypes.GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                listProducts: action.payload
            }
        case ActionTypes.GET_PRODUCTS_ERROR:
            return state;
    
        default:
            return state;
    }
}

export default ProductReducer;