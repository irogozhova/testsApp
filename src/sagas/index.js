import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import logoutSaga from './logoutSaga';
import registrationSaga from './registrationSaga';
import currentUserSaga from './currentUserSaga';

export default function* rootSaga() {
  yield all([
    loginSaga(),
    logoutSaga(),
    registrationSaga(),
    currentUserSaga(),
  ])
}