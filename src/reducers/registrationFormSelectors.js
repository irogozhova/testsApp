import { createSelector } from 'reselect';
import { rootSelector } from './commonSelectors';

const registrationSelector = createSelector(
  rootSelector,
  (state) => state.registration,
);

export const formSelector = createSelector(
  registrationSelector,
  ({form}) => form,
);

export const isSendingInProgressSelector = createSelector(
  registrationSelector,
  ({isSendingInProgress}) => isSendingInProgress,
);

export const errorMessagesSelector = createSelector(
  registrationSelector,
  ({errorMessages}) => errorMessages,
);
