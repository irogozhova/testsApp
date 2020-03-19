import { UPDATE_FIELD } from "constants/common";

const initialState = {
  form: {
    login: '',
    password: '',
    confirmPassword: '',
    isAdmin: false,
  }
};

export default function registration(state = initialState, action) {
  if (action.type === UPDATE_FIELD) {
    const { key, value } = action;

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
