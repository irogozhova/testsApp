import { all, takeEvery, put } from "redux-saga/effects";
import axios from 'axios';

import { LOGIN } from "actions/constants";

function* loginSaga({ payload }) {
  const { 
    login,
    password,
  } = payload;

  try {
    const result = yield axios({
      baseURL: 'https://snp-tests.herokuapp.com/api/v1/',
      url: '/signin',
      method: 'post',
      data: {
        username: login,
        password,
      },
      withCredentials: true,
    });

    yield put({
      type: `LOGIN_SUCCESS`,
      payload: {
        data: result.data,
      },
    })

  } catch ( {message, response} ) {
    yield put({
      type: `LOGIN_FAILURE`,
      payload: response.data,
    })
  }
} 

export default function* () {
  yield all([
    takeEvery(LOGIN, loginSaga), // research takeEvery vs takeLatest
  ])
}