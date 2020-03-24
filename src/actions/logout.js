import { LOGOUT } from "actions/constants";

export function onLogout() {
  return { type: LOGOUT }
};