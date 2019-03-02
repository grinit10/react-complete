import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers/index.reducer';
import watcherSaga from './sagas/index';

const sagaMiddleware = createSagaMiddleware()

const configureStore = () => {
    const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(watcherSaga)
    return store;
}
export default configureStore;