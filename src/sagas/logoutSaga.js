import { all, takeEvery, put } from "redux-saga/effects";
import axios from 'axios';

import history from 'utils/history';

import { LOGOUT } from "actions/constants";

function* logoutSaga() {
  try {
    const result = yield axios({
      baseURL: 'https://snp-tests.herokuapp.com/api/v1/',
      url: '/logout',
      method: 'delete',
      withCredentials: true,
    });

    yield put({
      type: `LOGOUT_SUCCESS`,
      payload: {
        data: result.data,
      },
    })
    yield history.push('/login');

  } catch ( {message, response} ) {
    yield put({
      type: `LOGOUT_FAILURE`,
      payload: response.data,
    })
  }
} 

export default function* () {
  yield all([
    takeEvery(LOGOUT, logoutSaga),
  ])
}