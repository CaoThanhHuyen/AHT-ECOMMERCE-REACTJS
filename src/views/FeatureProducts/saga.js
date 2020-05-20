import { ActionTypes, getProductsSuccess } from "./actions";
import {takeLatest, put} from 'redux-saga/effects';

const BASE_URL = "https://5e702b60667af70016316bd7.mockapi.io/api/categories";
const spinner = document.getElementById("spiner");

function* sagaGetProducts(action) {
    const response = yield fetch(BASE_URL + `/${action.payload}/products`, {
        method: 'GET'
    });
    const resJSON = yield response.json()
    
    yield put(getProductsSuccess(resJSON))
}

export function* watchSagaGetProducts() {
    yield takeLatest(ActionTypes.GET_PRODUCTS, sagaGetProducts);
}