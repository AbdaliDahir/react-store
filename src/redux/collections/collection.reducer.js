// import SHOP_DATA from './shop.data';
import { CollectionActionTypes } from './collection.types';

const INITIAL_SATATE = {
  collectionData: null,
  isFetching: false,
  errorMessage: undefined
} 

const collectionReducer = (state = INITIAL_SATATE, action) => {
  switch(action.type) {
    case CollectionActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
      }
    case CollectionActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collectionData: action.payload
      }
    case CollectionActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      }
    default:
      return state
  }
}

export default collectionReducer