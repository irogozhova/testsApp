import { 
  SHOW_ADD_QUESTION_FORM,
} from "actions/constants";

export function onShowAddQuestionForm(payload) {
  return { type: SHOW_ADD_QUESTION_FORM, payload }
};
