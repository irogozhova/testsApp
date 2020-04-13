import { 
  UPDATE_TEST_NAME,
  SAVE_TEST,
} from "actions/constants";

export function onFieldChange(payload) {
  return { type: UPDATE_TEST_NAME, payload }
};

export function onSubmit(payload) {
  return { type: SAVE_TEST, payload }
};
