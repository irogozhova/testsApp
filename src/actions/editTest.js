import { 
  GET_TEST_DATA,
  UPDATE_TEST_NAME,
  SHOW_ADD_QUESTION_FORM,
} from "actions/constants";

export function onGetTestData(payload) {
  return { type: GET_TEST_DATA, payload }
};

export function onUpdateTestName(payload) {
  return { type: UPDATE_TEST_NAME, payload }
};

export function onShowAddQuestionForm(payload) {
  return { type: SHOW_ADD_QUESTION_FORM, payload }
};
