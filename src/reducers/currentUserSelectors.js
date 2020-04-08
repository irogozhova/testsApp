import { createSelector } from 'reselect';
import { rootSelector } from './commonSelectors';

const currentUserSelector = createSelector(
  rootSelector,
  (state) => state.currentUser,
);

export const currentUserStatusSelector = createSelector(
  currentUserSelector,
  ({status}) => status,
);

export const isCurrentUserSelector = createSelector(
  currentUserSelector,
  (currentUser) => Boolean(currentUser.data),
);