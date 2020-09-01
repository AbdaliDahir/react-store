import React, {useState, useEffect} from 'react';
import { Route } from 'react-router-dom';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCollections} from '../../redux/collections/collection.actions';

import CollectionsOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component'
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionSpinnerOverview = WithSpinner(CollectionsOverview);
const CollectionSpinnerPage = WithSpinner(CollectionPage);

const ShopPage = (props) => {
  const [loading, setLoading] = useState(true);
  const {setCollections } = props;
  
  useEffect(() => {
    const collectionRef = firestore.collection('shop');

    const unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      const collectionMap = convertCollectionsSnapshotToMap(snapshot);
      console.log(collectionMap);
      setCollections(collectionMap);
      setLoading(false);
    })

    return () => unsubscribeFromSnapshot()

  }, []);

  return (
    <div className='shop-page'>
      <Route exact path={`${props.match.path}`} render={(props) => <CollectionSpinnerOverview isLoading={loading} {...props} /> } />
      {/* <Route path={`${props.match.path}/:collectionId`} component={CollectionPage} /> */}
      <Route path={`${props.match.path}/:collectionId`} render={(props) => <CollectionSpinnerPage isLoading={loading} {...props} /> } />
    </div>
  )
};

const mapDispatchToProps = dispatch => ({
  setCollections: collectionMap => dispatch(setCollections(collectionMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);