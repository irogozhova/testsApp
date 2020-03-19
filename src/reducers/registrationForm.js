import { UPDATE_FIELD } from "actions/constants";

const initialState = {
  form: {
    login: '',
    password: '',
    confirmPassword: '',
    isAdmin: false,
  }
};

export default function registration(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_FIELD:
      const { name, value } = payload;
      return {
        ...state,
        form: {
          ...state.form,
          [name]: value,
        }
      }
    default:
      return state;
  }
};
