import { 
  LOGIN_UPDATE_FIELD,
  LOGIN_UPDATE_ERROR_MESSAGES,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "actions/constants";

const initialState = {
  form: {
    login: '',
    password: '',
  },
  isSendingInProgress: false,
  errorMessages: [],
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case LOGIN_UPDATE_FIELD:
      const { name, value } = payload;

      return {
        ...state,
        form: {
          ...state.form,
          [name]: value,
        }
      }

    case LOGIN_UPDATE_ERROR_MESSAGES:
      return {
        ...state,
        errorMessages: payload,
      }

    case LOGIN:
      return {
        ...state,
        isSendingInProgress: true,
      }

    case LOGIN_SUCCESS:
      return {
        ...state,
        isSendingInProgress: false,
      }

    case LOGIN_FAILURE:
      const { error } = payload;

      const errorMessage = (error === 'username or password is invalid') ?
        'Неверное имя пользователя или пароль.' :
        'Something went wrong'

      return {
        ...state,
        isSendingInProgress: false,
        errorMessages: [
          ...state.errorMessages,
          errorMessage,
        ]
      }

    default:
      return state;
  }
};
