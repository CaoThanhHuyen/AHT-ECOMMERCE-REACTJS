import { ActionTypes, getCategoriesSuccess, getCategoriesError } from "./action";
import {takeLatest, put} from 'redux-saga/effects';

const BASE_URL = "https://5e702b60667af70016316bd7.mockapi.io/api/categories";

function* sagaGetCagegories() {
    
    const response = yield fetch(BASE_URL, {
        method: 'GET'
    });
    const resJSON = yield response.json()
    // if(response.status === 200) {
        yield put(getCategoriesSuccess(resJSON))
        
    // } else {
        // yield put(getCategoriesError(resJSON.error))
    // }
}

export function* watchSagaGetCategories() {
    yield takeLatest(ActionTypes.GET_CATEGORIES, sagaGetCagegories);
}