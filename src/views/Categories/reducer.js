import {ActionTypes} from './action';

const DEFAULT_STATE = {
    listCate: []
}

const CategoriesReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case ActionTypes.GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                listCate: action.payload
            }
        case ActionTypes.GET_CATEGORIES_ERROR: 
            return state;
        
        default: 
            return state;
    }
}

export default CategoriesReducer;