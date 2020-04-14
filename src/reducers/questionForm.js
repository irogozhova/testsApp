import { 
  ADD_NEW_QUESTION,
  CHANGE_QUESTION_FORM_FIELD,
} from "actions/constants";

const initialState = {
  isVisible: false,
  title: '',
  questionType: 'single',
  answer: 0, //for number type questions
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_NEW_QUESTION:
      return {
        ...initialState,
        isVisible: true,
      }

    case CHANGE_QUESTION_FORM_FIELD:
      const { name, value } = payload;
      return {
        [name]: value,
      }

    default:
      return state;
  }
};
