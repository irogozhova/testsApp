import { all, takeEvery } from "redux-saga/effects";
import { api } from './api';

import { REGISTER } from "actions/constants";

function* registerSaga(action) {
  const { 
    login,
    password,
    confirmPassword,
    isAdmin,
  } = action.payload;

  yield api({
    action,
    method: 'post',
    url: '/signup',
    data: {
      username: login,
      password,
      password_confirmation: confirmPassword,
      is_admin: isAdmin,
    },
    successRedirectTo: '/',
  });
}

export default function* () {
  yield all([
    takeEvery(REGISTER, registerSaga), // research takeEvery vs takeLatest
  ])
}