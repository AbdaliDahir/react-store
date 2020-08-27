import { createSelector } from 'reselect';

const selectCategories = state => state.directory;

export const selectCategoriesSections = createSelector(
  [selectCategories],
  directory => directory.homeCategories
)