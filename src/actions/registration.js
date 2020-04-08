import { REGISTRATION_UPDATE_FIELD, REGISTER, REGISTRATION_UPDATE_ERROR_MESSAGES } from "actions/constants";

export function onFieldChange(payload) {
  return { type: REGISTRATION_UPDATE_FIELD, payload }
};

export function onSubmit(payload) {
  return { type: REGISTER, payload }
};

export function onErrorMessagesUpdate(payload) {
  return { type: REGISTRATION_UPDATE_ERROR_MESSAGES, payload }
};
