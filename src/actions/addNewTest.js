import { 
  UPDATE_TEST_NAME,
} from "actions/constants";

export function onFieldChange(payload) {
  return { type: UPDATE_TEST_NAME, payload }
};
