import { createSelector } from 'reselect';
import { rootSelector } from './commonSelectors';

export const editTestSelector = createSelector(
  rootSelector,
  (state) => state.editTest,
);

export const testSelector = createSelector(
  editTestSelector,
  ({test}) => test,
);
