import { all, takeEvery, put } from "redux-saga/effects";
import axios from 'axios';

import history from 'utils/history';

import { REGISTER } from "actions/constants";

function* registerSaga({ payload }) {
  const { 
    login,
    password,
    confirmPassword,
    isAdmin
  } = payload;

  try {
    const result = yield axios({
      baseURL: 'https://snp-tests.herokuapp.com/api/v1/',
      url: '/signup',
      method: 'post',
      headers: {},
      params: {},
      data: {
        username: login,
        password,
        password_confirmation: confirmPassword,
        is_admin: isAdmin,
      },
      withCredentials: true,
    });

    yield put({
      type: `REGISTER_SUCCESS`,
      payload: {
        data: result.data,
      },
    })
    yield history.push('/');

  } catch ( {message, response} ) {
    yield put({
      type: `REGISTER_FAILURE`,
      response: response.data,
    })
  }
} 

export default function* () {
  yield all([
    takeEvery(REGISTER, registerSaga), // research takeEvery vs takeLatest
  ])
}