import {all} from 'redux-saga/effects';
import { watchSagaGetCategories } from '../../views/Categories/saga';
import { watchSagaGetProducts } from '../../views/FeatureProducts/saga';

function* rootSaga() {
    yield all([
        watchSagaGetCategories(),
        watchSagaGetProducts()
    ]);
}

export default rootSaga;