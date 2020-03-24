import { UPDATE_FIELD, LOGIN, UPDATE_ERROR_MESSAGES } from "actions/constants";

export function onFieldChange(payload) {
  return { type: UPDATE_FIELD, payload }
};

export function onSubmit(payload) {
  return { type: LOGIN, payload }
};

export function onErrorMessagesUpdate(payload) {
  return { type: UPDATE_ERROR_MESSAGES, payload }
};
