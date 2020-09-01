// import SHOP_DATA from './shop.data';
import { CollectionActionTypes } from './collection.types';

const INITIAL_SATATE = {
  collectionData: null
} 

const collectionReducer = (state = INITIAL_SATATE, action) => {
  switch(action.type) {
    case CollectionActionTypes.SET_COLLECTION_ITEMS:
      return {
        ...state,
        collectionData: action.payload
      }
    default:
      return state
  }
}

export default collectionReducer