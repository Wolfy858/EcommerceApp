import React from 'react';

import MenuItem from '../menu-item/menu-item.component'
import './directory.styles.scss'

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [{
        title: 'lands',
        imageUrl: 'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=83288&type=card',
        id: 1,
        linkUrl: 'lands'
      },{
        title: 'creatures',
        imageUrl: 'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=743&type=card',
        id: 2,
        linkUrl: ''
      },{
        title: 'sorceries',
        imageUrl: 'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=11581&type=card',
        id: 3,
        linkUrl: ''
      },{
        title: 'instants',
        imageUrl: 'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=11214&type=card',
        size: 'large',
        id: 4,
        linkUrl: ''
      },{
        title: 'enchantments',
        imageUrl: 'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=442111&type=card',
        size: 'large',
        id: 5,
        linkUrl: ''
      },]
    }
  }

  render() {

    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem  key={id} {...otherSectionProps} />
        ))}
      </div>
    )
  }
}

export default Directory;
