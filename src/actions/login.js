import { LOGIN_UPDATE_FIELD, LOGIN, LOGIN_UPDATE_ERROR_MESSAGES } from "actions/constants";

export function onFieldChange(payload) {
  return { type: LOGIN_UPDATE_FIELD, payload }
};

export function onSubmit(payload) {
  return { type: LOGIN, payload }
};

export function onErrorMessagesUpdate(payload) {
  return { type: LOGIN_UPDATE_ERROR_MESSAGES, payload }
};
