import React, {useEffect} from 'react';
import { Route } from 'react-router-dom';

import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect'
import {fetchCollectionsStart} from '../../redux/collections/collection.actions';
import { selectIsCollectionFetching, selectIsCollectionLoaded } from '../../redux/collections/collection.selectors';
import CollectionsOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component'
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionSpinnerOverview = WithSpinner(CollectionsOverview);
const CollectionSpinnerPage = WithSpinner(CollectionPage);

const ShopPage = (props) => {
  const {match, isCollectionFetching, isCollectionLoaded} = props;
  useEffect(() => {
    const { fetchCollectionsStart } = props;
    // fetchCollectionsStartAsync();
    fetchCollectionsStart();
  }, []);

  return (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} render={(props) => <CollectionSpinnerOverview isLoading={isCollectionFetching} {...props} /> } />
      {/* <Route path={`${match.path}/:collectionId`} component={CollectionPage} /> */}
      <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionSpinnerPage isLoading={!isCollectionLoaded} {...props} /> } />
    </div>
  )
};

const mapStaetToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  isCollectionLoaded: selectIsCollectionLoaded
})
const mapDispatchToProps = dispatch => ({
  // fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(mapStaetToProps, mapDispatchToProps)(ShopPage);