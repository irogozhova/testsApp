import { 
  UPDATE_TEST_NAME,
  SAVE_TEST,
  SAVE_TEST_SUCCESS,
} from "actions/constants";

const initialState = {
  test: {
    name: '',
  },
  isSendingInProgress: false,
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case UPDATE_TEST_NAME:
      const { value } = payload;
      return {
        ...state,
        test: {
          name: value,
        }
      }

    case SAVE_TEST:
      return {
        ...state,
        isSendingInProgress: true,
      }

    case SAVE_TEST_SUCCESS:
      return {
        ...state,
        isSendingInProgress: false,
      }

    default:
      return state;
  }
};
