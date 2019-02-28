import {createStore} from 'redux';
import rootReducer from './reducers/index.reducer';

const configureStore = () => {
    return createStore(rootReducer);
}
export default configureStore;