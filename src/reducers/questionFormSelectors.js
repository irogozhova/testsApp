import { createSelector } from 'reselect';
import { rootSelector } from './commonSelectors';

export const questionFormSelector = createSelector(
  rootSelector,
  (state) => state.questionForm,
);
