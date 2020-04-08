import { createSelector } from 'reselect';
import { rootSelector } from './commonSelectors';

const logoutSelector = createSelector(
  rootSelector,
  (state) => state.logout,
);

export const isSendingInProgressSelector = createSelector(
  logoutSelector,
  ({isSendingInProgress}) => isSendingInProgress,
);
