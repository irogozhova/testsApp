import { createSelector } from 'reselect';
import { rootSelector } from './commonSelectors';

const loginSelector = createSelector(
  rootSelector,
  (state) => state.login,
);

export const formSelector = createSelector(
  loginSelector,
  ({form}) => form,
);

export const isSendingInProgressSelector = createSelector(
  loginSelector,
  ({isSendingInProgress}) => isSendingInProgress,
);

export const errorMessagesSelector = createSelector(
  loginSelector,
  ({errorMessages}) => errorMessages,
);
