import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {selectCollectionsItems} from '../../redux/collections/collection.selectors';

const CollectionOverview = ({collections}) => {
  return (
    <div className='shop-page'>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsItems
})
export default connect(mapStateToProps)(CollectionOverview );