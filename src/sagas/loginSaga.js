import { all, takeEvery } from "redux-saga/effects";
import { api } from './api';

import { LOGIN } from "actions/constants";

function* loginSaga(action) {
  const { login, password } = action.payload;

  yield api({
    action,
    method: 'post',
    url: '/signin',
    data: {
      username: login,
      password,
    },
    successRedirectTo: '/',
  });
}

export default function* () {
  yield all([
    takeEvery(LOGIN, loginSaga), // research takeEvery vs takeLatest
  ])
}