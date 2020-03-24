import { GET_CURRENT_USER } from "actions/constants";

export function getCurrentUser(payload) {
  return { type: GET_CURRENT_USER, payload }
};