import { takeLatest, put } from "redux-saga/effects";
import { ActionTypes, getProductSuccess } from "./action";

const BASE_URL = "https://5e702b60667af70016316bd7.mockapi.io/api/categories/1/products/";

function* sagaGetProduct(action) {
    try {
        const response = yield fetch(BASE_URL + `${action.payload.id}`, {
            method: "GET"
        });
        const resJSON = yield response.json();
        if(resJSON) {
            yield put(getProductSuccess(resJSON));
        }
        
    } catch (error) {
        console.log(error);
    }
}

export function* watchSagaGetProduct() {
    yield takeLatest(ActionTypes.GET_PRODUCT, sagaGetProduct);
}