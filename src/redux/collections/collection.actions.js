import { CollectionActionTypes } from './collection.types';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => ({
  type: CollectionActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = collectionMap => ({
  type: CollectionActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionMap
})

export const fetchCollectionsFailure = error => ({
  type: CollectionActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: error
})

export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection('shop');
    dispatch(fetchCollectionsStart());
    collectionRef.get().then(snapshot => {
      const collectionMap = convertCollectionsSnapshotToMap(snapshot);
      dispatch(fetchCollectionsSuccess(collectionMap));
    }).catch(error => {
      dispatch(fetchCollectionsFailure(error.message))
    })
  }
}