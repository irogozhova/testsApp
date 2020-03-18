import { UPDATE_FIELD } from "../constants";

export function onChangeLogin(payload) {
  return { type: UPDATE_FIELD, payload }
};
