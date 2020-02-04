const INITIAL_STATE = {
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

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default directoryReducer;
