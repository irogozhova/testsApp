import { all, takeEvery } from "redux-saga/effects";
import { api } from './api';

import { LOGOUT } from "actions/constants";

function* logoutSaga(action) {
  yield api({
    action,
    method: 'delete',
    url: '/logout',
    successRedirectTo: '/login',
  });
}

export default function* () {
  yield all([
    takeEvery(LOGOUT, logoutSaga),
  ])
}