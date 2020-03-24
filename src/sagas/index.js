import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import currentUserSaga from './currentUserSaga';

export default function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(),
    currentUserSaga(),
  ])
}