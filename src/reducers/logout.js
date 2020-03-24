import { 
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} from "actions/constants";

const initialState = {
  isSendingInProgress: false,
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case LOGOUT:
      return {
        ...state,
        isSendingInProgress: true,
      }

    case LOGOUT_SUCCESS:
    case LOGOUT_FAILURE:
      return {
        ...state,
        isSendingInProgress: false,
      }

    default:
      return state;
  }
};

