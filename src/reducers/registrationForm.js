import { UPDATE_FIELD, REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE} from "actions/constants";

const initialState = {
  form: {
    login: '',
    password: '',
    confirmPassword: '',
    isAdmin: false,
  },
  isSendingInProgress: false,
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
    case REGISTER:
      return {
        ...state,
        isSendingInProgress: true,
      }
    case REGISTER_SUCCESS:
    case REGISTER_FAILURE:
      return {
        ...state,
        isSendingInProgress: false,
      }
    default:
      return state;
  }
};
