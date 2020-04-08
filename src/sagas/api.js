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
    }).then((response) => response.data);

    yield put({
      type: `${action.type}_SUCCESS`,
      payload: {
        data: result.data,
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