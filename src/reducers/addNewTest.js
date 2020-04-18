import { 
  CHANGE_TEST_NAME,
  SAVE_TEST,
  SAVE_TEST_SUCCESS,
} from "actions/constants";

const initialState = {
  test: {
    name: '',
    questions: [],
  },
  isSendingInProgress: false,
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case CHANGE_TEST_NAME:
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
      const { data: { id, title } } = payload;

      return {
        ...state,
        test: {
          id,
          title,
        },
        isSendingInProgress: false,
      }

    default:
      return state;
  }
};
