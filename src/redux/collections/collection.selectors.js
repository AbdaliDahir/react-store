import { createSelector } from 'reselect'

const selectCollection = state => state.collection;

export const selectCollectionsItems = createSelector(
  [selectCollection],
  collection => collection.collectionData
)