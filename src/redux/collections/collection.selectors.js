import { createSelector } from 'reselect'

// work with find search
// const COLLECTION_ID_MAP = {
//   hats: 1,
//   sneakers: 2,
//   jackets: 3,
//   womens: 4,
//   mens: 5
// }

const selectCollection = state => state.collection;


export const selectCollectionsItems = createSelector(
  [selectCollection],
  collection => collection.collectionData
)

export const selectCollectionsItemsForView = createSelector(
  [selectCollectionsItems],
  collection => collection ? Object.keys(collection).map( key => collection[key]) : []
)

export const selectCollectionCat = collectionUrlParam =>
  createSelector(
    [selectCollectionsItems],
    collection => (collection ? collection[collectionUrlParam] : null)
  );


// Problem with find Big O
// export const selectCollectionCat = collectionUrlParam =>
//   createSelector(
//     [selectCollectionsItems],
//     collection => collection.find(
//       collect => collect.id === COLLECTION_ID_MAP[collectionUrlParam]
//     )
//   );