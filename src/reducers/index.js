import { UPDATE_FIELD } from "constants/common";

const initialState = {
  form: {
    isAdmin: false,
  }
};

function rootReducer(state = initialState, action) {
  if (action.type === UPDATE_FIELD) {
    const { key, value } = action;
    console.log(action);
    return {
      ...state,
      form: {
        ...state.form,
        [key]: value,
      }
    }
  }
  return state;
};

export default rootReducer;
