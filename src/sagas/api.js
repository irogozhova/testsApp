import axios from 'axios';
import { put } from "redux-saga/effects";
import history from 'utils/history';

export function* api({
  action,
  method = 'get',
  url,
  data,
  successRedirectTo,
}) {
  try {
    const result = yield axios({
      baseURL: 'https://snp-tests.herokuapp.com/api/v1/',
      url,
      method,
      data,
      withCredentials: true,
      headers: {
        'scope-key': 'f74c6af46a78becb2f1bd3f95bbd5858'
      }
    }).then((response) => response.data);

    yield put({
      type: `${action.type}_SUCCESS`,
      payload: {
        data: result,
      },
    });
    if (successRedirectTo) {
      yield history.push(successRedirectTo);
    }
  }

  catch ({ response }) {
    yield put({
      type: `${action.type}_FAILURE`,
      payload: {
        payload: response.data,
      },
    });
  }
}