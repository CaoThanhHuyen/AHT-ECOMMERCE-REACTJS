import { ActionTypes } from "./actions";

const DEFAULT_STATE = {
    listProducts: [],
    isLoading: false
} 

const ProductsReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case ActionTypes.GET_PRODUCTS: 
            return {
                ...state,
                isLoading: true
            }
        case ActionTypes.GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                listProducts: action.payload,
                isLoading: false
            }
        case ActionTypes.GET_PRODUCTS_ERROR:
            return state;
    
        default:
            return state;
    }
}

export default ProductsReducer;