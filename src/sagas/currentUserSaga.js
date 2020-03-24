import { all, takeEvery, put } from "redux-saga/effects";
import axios from 'axios';

import { GET_CURRENT_USER } from "actions/constants";

function* getCurrentUserSaga() {
  try {
    const result = yield axios({
      baseURL: 'https://snp-tests.herokuapp.com/api/v1/',
      url: '/users/current',
      method: 'get',
      withCredentials: true,
    });

    yield put({
      type: `GET_CURRENT_USER_SUCCESS`,
      payload: {
        data: result.data,
      },
    })

  } catch ( {message, response} ) {
    yield put({
      type: `GET_CURRENT_USER_FAILURE`,
      response: response.data,
    })
  }
} 

export default function* () {
  yield all([
    takeEvery(GET_CURRENT_USER, getCurrentUserSaga), // research takeEvery vs takeLatest
  ])
}