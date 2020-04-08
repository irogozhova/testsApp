import { all, takeEvery } from "redux-saga/effects";
import { api } from './api';

import { GET_CURRENT_USER } from "actions/constants";

function* getCurrentUserSaga(action) {
  yield api({
    action,
    url: '/users/current',
  });
}

export default function* () {
  yield all([
    takeEvery(GET_CURRENT_USER, getCurrentUserSaga),
  ])
}