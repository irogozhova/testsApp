import { createSelector } from 'reselect';
import { rootSelector } from './commonSelectors';

const addNewTestSelector = createSelector(
  rootSelector,
  (state) => state.addNewTest,
);

export const testSelector = createSelector(
  addNewTestSelector,
  ({test}) => test,
);

export const isSendingInProgressSelector = createSelector(
  testSelector,
  ({isSendingInProgress}) => isSendingInProgress,
);
