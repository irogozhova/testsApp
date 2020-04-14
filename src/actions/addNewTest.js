import { 
  SAVE_TEST,
} from "actions/constants";

export function onSubmit(payload) {
  return { type: SAVE_TEST, payload }
};
