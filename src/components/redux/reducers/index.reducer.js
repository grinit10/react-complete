import {combineReducers} from 'redux';
import errorReducer from './error.reducer';
import imagesReducer from './images.reducer';
import loadingReducer from './loading.reducer';

const rootReducer = combineReducers({
    isLoading: loadingReducer,
    error: errorReducer,
    images: imagesReducer
})

export default rootReducer;