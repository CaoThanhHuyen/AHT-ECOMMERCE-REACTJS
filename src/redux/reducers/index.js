import { combineReducers } from "redux";
import CategoriesReducer from "../../views/Categories/reducer";
import ProductsReducer from "../../views/FeatureProducts/reducer";
import productReducer from "../../views/SingerProduct/reducer";

const rootReducer = combineReducers({
    categories: CategoriesReducer,
    products: ProductsReducer,
    product: productReducer
});

export default rootReducer;