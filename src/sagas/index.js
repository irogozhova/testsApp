import { all } from 'redux-saga/effects';
import registrationSaga from './registrationSaga';
import currentUserSaga from './currentUserSaga';

export default function* rootSaga() {
  yield all([
    registrationSaga(),
    currentUserSaga(),
  ])
}