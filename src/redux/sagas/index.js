import {all} from 'redux-saga/effects';
import { watchSagaGetCategories } from '../../views/Categories/saga';
import { watchSagaGetProducts } from '../../views/FeatureProducts/saga';
import { watchSagaGetProduct} from '../../views/SingerProduct/saga';

function* rootSaga() {
    yield all([
        watchSagaGetCategories(),
        watchSagaGetProducts(),
        watchSagaGetProduct()
    ]);
}

export default rootSaga;