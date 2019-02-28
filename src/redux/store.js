import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers/index.reducer';
import helloSaga from './sagas/index';

const sagaMiddleware = createSagaMiddleware()

const configureStore = () => {
    const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
    store.dispatch({type:'Hello'})
    sagaMiddleware.run(helloSaga)
    return store;
}
export default configureStore;