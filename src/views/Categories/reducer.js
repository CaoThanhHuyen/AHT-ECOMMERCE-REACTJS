import {ActionTypes} from './action';

const DEFAULT_STATE = {
    listCate: [],
    activeID: 1
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
        
        case ActionTypes.SET_ACTIVE_CATEGORIES:
            const newActiveId = action.payload;
            return {
                ...state,
                activeID: newActiveId
            };
        default: 
            return state;
    }
}

export default CategoriesReducer;