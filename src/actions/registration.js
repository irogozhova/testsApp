import { UPDATE_FIELD, REGISTER } from "actions/constants";

export function onFieldChange(payload) {
  return { type: UPDATE_FIELD, payload }
};

export function onSubmit(payload) {
  return { type: REGISTER, payload }
};
