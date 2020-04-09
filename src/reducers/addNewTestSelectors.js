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
