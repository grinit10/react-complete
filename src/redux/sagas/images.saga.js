import { takeEvery, put, select, call } from 'redux-saga/effects';

import * as actionCreators from '../actions/actions.images';
import { imageaction } from './../actions';
import  imagesAPI  from './../api';

const getPage = state => state.pagenumber;

function* handleImagesLoad() {
    const pagenumber = yield select(getPage);
    const res = yield call(imagesAPI.fetchImages, pagenumber);
    yield put(actionCreators.loadimagesSuccess(res.data));
}

function* watcherImagesLoad() {
    yield takeEvery(imageaction.LOAD, handleImagesLoad)
}
export default watcherImagesLoad