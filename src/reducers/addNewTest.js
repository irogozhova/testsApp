import { 
  UPDATE_TEST_NAME,
} from "actions/constants";

const initialState = {
  test: {
    name: '',
  },
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

    default:
      return state;
  }
};
