import {
  GET_CURRENT_USER,
  GET_CURRENT_USER_SUCCESS,
  GET_CURRENT_USER_FAILURE,
} from "actions/constants";

const initialState = {
  data: null,
  status: null,
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case GET_CURRENT_USER:
      return {
        ...state,
        status: 'LOADING',
      }

    case GET_CURRENT_USER_SUCCESS:
      return {
        ...state,
        data: payload.data,
        status: 'SUCCESS',
      }

    case GET_CURRENT_USER_FAILURE:
      return {
        ...state,
        status: 'FAILURE',
      }

    default:
      return state;
  }
};
