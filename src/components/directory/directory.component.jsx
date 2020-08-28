import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import {connect} from 'react-redux';
import {selectCategoriesSections} from '../../redux/directory/directory.selectors';
import './directory.styles.scss';

const Directory = ({homeCategories}) => {
  return (
    <div className='directory-menu'>
      {homeCategories.map(({ id, ...otherSectionsProps }) => (
        // <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        <MenuItem key={id} {...otherSectionsProps} />
      ))}
    </div>
  ); 
}

const mapStateToProps = state => ({
  homeCategories: selectCategoriesSections(state)
})
export default connect(mapStateToProps)(Directory);