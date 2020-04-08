import { 
  REGISTRATION_UPDATE_FIELD,
  REGISTRATION_UPDATE_ERROR_MESSAGES,
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAILURE
} from "actions/constants";

const initialState = {
  form: {
    login: '',
    password: '',
    confirmPassword: '',
    isAdmin: false,
  },
  isSendingInProgress: false,
  errorMessages: [],
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case REGISTRATION_UPDATE_FIELD:
      const { name, value } = payload;

      return {
        ...state,
        form: {
          ...state.form,
          [name]: value,
        }
      }

    case REGISTRATION_UPDATE_ERROR_MESSAGES:
      const { payload: errorMessages } = action;

      return {
        ...state,
        errorMessages: errorMessages,
      }

    case REGISTER:
      return {
        ...state,
        isSendingInProgress: true,
      }

    case REGISTER_SUCCESS:
      return {
        ...state,
        isSendingInProgress: false,
      }

    case REGISTER_FAILURE:
      const { response } = action;

      const error = (response.username[0] === 'has already been taken') ?
        'Пользователь с таким именем уже существует. Придумайте другое имя.' :
        'Something went wrong'

      return {
        ...state,
        isSendingInProgress: false,
        errorMessages: [
          ...state.errorMessages,
          error,
        ]
      }

    default:
      return state;
  }
};
