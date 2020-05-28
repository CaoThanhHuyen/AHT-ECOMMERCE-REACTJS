import { combineReducers } from "redux";
import CategoriesReducer from "../../views/Categories/reducer";
import ProductsReducer from "../../views/FeatureProducts/reducer";
import productReducer from "../../views/SingerProduct/reducer";
import cartReducer from "../../views/Cart/reducer";
import wishList from "../../views/WishList/reducer";

const rootReducer = combineReducers({
    categories: CategoriesReducer,
    products: ProductsReducer,
    product: productReducer,
    cart: cartReducer,
    wishList: wishList
});

export default rootReducer;