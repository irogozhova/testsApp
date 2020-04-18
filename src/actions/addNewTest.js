import { 
  CHANGE_TEST_NAME,
  SAVE_TEST,
} from "actions/constants";

export function onChangeTestName(payload) {
  return { type: CHANGE_TEST_NAME, payload }
};

export function onSubmit(payload) {
  return { type: SAVE_TEST, payload }
};
