import { combineReducers } from "redux";
import CategoriesReducer from "../../views/Categories/reducer";
import ProductReducer from "../../views/FeatureProducts/reducer";

const rootReducer = combineReducers({
    categories: CategoriesReducer,
    products: ProductReducer
});

export default rootReducer;