import {takeEvery, put} from 'redux-saga/effects';


function* workerSaga() {
    yield put({type: 'Hello_Worker'});
}

function* watcherSaga() {
    yield takeEvery('Hello', workerSaga)
}
export default watcherSaga