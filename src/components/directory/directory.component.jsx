import React, { useState } from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

const Directory = () => {
  const sect = {
    sectionsEnter : [
      {
        title: 'hats',
        imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
        id: 1,
        linkUrl: "hats"
      },
      {
        title: 'jackets',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        id: 2,
        linkUrl: "hello"
      },
      {
        title: 'sneakers',
        imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
        id: 3,
        linkUrl: "hello"
      },
      {
        title: 'womens',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        size: 'large',
        id: 4,
        linkUrl: "hello"
      },
      {
        title: 'mens',
        imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
        size: 'large',
        id: 5,
        linkUrl: "hello"
      }
    ]
  };
  const [sections, setSections] = useState(sect);
  
  return (
    <div className='directory-menu'>
      {sections.sectionsEnter.map(({ id, ...otherSectionsProps }) => (
        // <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        <MenuItem key={id} {...otherSectionsProps} />
      ))}
    </div>
  ); 
}

export default Directory;