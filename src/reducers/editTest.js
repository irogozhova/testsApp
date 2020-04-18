import { 
  GET_TEST_DATA_SUCCESS,
  UPDATE_TEST_NAME,
} from "actions/constants";

const initialState = {
  test: {
    title: '',
  },
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case GET_TEST_DATA_SUCCESS:
      const { title } = payload.data;

      return {
        ...state,
        test: {
          ...state.test,
          title: title,
        }
      }

    case UPDATE_TEST_NAME:
      const { value } = payload;

      return {
        ...state,
        test: {
          ...state.test,
          title: value,
        }
      }

    default:
      return state;
  }
};
