import {
  all, delay, put, takeLatest,
} from 'redux-saga/effects';
import { types } from '../ducks/auth';

function* loadUser() {
  yield delay(2000);
  yield put({
    type: types.USER_REQUEST_SUCCESS,
    payload: {
      id: 1,
      name: 'Leonardo',
      email: 'leonardorangel2604@gmail.com',
    },
  });
}

function* rootSaga(): any {
  return yield all([
    takeLatest(types.ASYNC_REQUEST_USER, loadUser),
  ]);
}

export default rootSaga;
