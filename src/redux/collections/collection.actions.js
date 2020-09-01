import { CollectionActionTypes } from './collection.types';

export const setCollections = collection => ({
  type: CollectionActionTypes.SET_COLLECTION_ITEMS,
  payload: collection
});