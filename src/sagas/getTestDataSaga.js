import { all, takeEvery } from "redux-saga/effects";
import { api } from './api';

import { GET_TEST_DATA } from "actions/constants";

function* getTestDataSaga(action) {
  const { payload } = action;

  yield api({
    action,
    url: `/tests/${payload}`,
  });
}

export default function* () {
  yield all([
    takeEvery(GET_TEST_DATA, getTestDataSaga), // research takeEvery vs takeLatest
  ])
}