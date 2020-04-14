import { all, takeEvery } from "redux-saga/effects";
import { api } from './api';
import history from 'utils/history';

import { SAVE_TEST, SAVE_TEST_SUCCESS } from "actions/constants";

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

function* saveTestSuccessSaga({payload}) {
  const {id} = payload.data;

  yield history.push(`/editTest/${id}`);
}

export default function* () {
  yield all([
    takeEvery(SAVE_TEST, addNewTestSaga), // research takeEvery vs takeLatest
    takeEvery(SAVE_TEST_SUCCESS, saveTestSuccessSaga),
  ])
}