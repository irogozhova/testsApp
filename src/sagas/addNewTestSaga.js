import { all, takeEvery } from "redux-saga/effects";
import { api } from './api';

import { SAVE_TEST } from "actions/constants";

function* addNewTestSaga(action) {
  const { 
    name,
  } = action.payload;

  yield api({
    action,
    method: 'post',
    url: '/tests',
    data: {
      title: name,
    },
  });
}

export default function* () {
  yield all([
    takeEvery(SAVE_TEST, addNewTestSaga), // research takeEvery vs takeLatest
  ])
}