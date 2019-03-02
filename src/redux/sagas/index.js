// import { takeEvery, put } from 'redux-saga/effects';

// import { imageaction } from './../actions';
import watcherImagesLoad from './images.saga'


// function* handleImagesLoad() {
//     console.log('In worker')
//     yield put({ type: 'Hello_Worker' });
// }

// function* watcherSaga() {
//     yield takeEvery(imageaction.LOAD, handleImagesLoad)
// }
export default watcherImagesLoad