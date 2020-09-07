import {all, call} from 'redux-saga/effects';

import { fetchCollectionsStart } from './collections/collection.sagas';

export default function* rootSaga() {
  yield all([call(fetchCollectionsStart)])
}