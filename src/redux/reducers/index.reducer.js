import {combineReducers} from 'redux';
import errorReducer from './error.reducer';
import imagesReducer from './images.reducer';
import loadingReducer from './loading.reducer';
import pageReducer from './page.reducer';

const rootReducer = combineReducers({
    isLoading: loadingReducer,
    error: errorReducer,
    images: imagesReducer,
    pagenumber: pageReducer
})

export default rootReducer;