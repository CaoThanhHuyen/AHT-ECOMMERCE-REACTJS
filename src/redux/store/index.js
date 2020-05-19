import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "../sagas";
import rootReducer from "../reducers";

const sagaMiddleware = createSagaMiddleware();


const store = createStore(
    rootReducer,
   
    {},
    applyMiddleware(sagaMiddleware),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), 
)

sagaMiddleware.run(rootSaga);

export default store;