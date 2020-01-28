const SHOP_DATA = [{
    id: 1,
    title: 'Lands',
    routeName: 'lands',
    items: [{
        id: 1,
        name: 'Swamp',
        imageUrl: 'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=83288&type=card',
        price: 1
      },
      {
        id: 2,
        name: 'Forest',
        imageUrl: 'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=14749&type=card',
        price: 1
      },
      {
        id: 3,
        name: 'Mountain',
        imageUrl: 'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=129649&type=card',
        price: 1
      },
      {
        id: 4,
        name: 'Island',
        imageUrl: 'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=398664&type=card',
        price: 1
      },
      {
        id: 5,
        name: 'Plains',
        imageUrl: 'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=122092&type=card',
        price: 1
      },
      {
        id: 6,
        name: 'Tropical Island',
        imageUrl: 'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=383138&type=card',
        price: 200
      },
      {
        id: 7,
        name: 'Underground Sea',
        imageUrl: 'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=383142&type=card',
        price: 300
      },
      {
        id: 8,
        name: 'Bayou',
        imageUrl: 'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=382860&type=card',
        price: 150
      },
      {
        id: 9,
        name: 'Taiga',
        imageUrl: 'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=383122&type=card',
        price: 175
      }
    ]
  },
  {
    id: 2,
    title: 'Creatures',
    routeName: 'creatures',
    items: [{
        id: 10,
        name: 'Phage the Untouchable',
        imageUrl: 'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=382324&type=card',
        price: 3
      },
      {
        id: 11,
        name: 'Akroma, Angel of Wrath',
        imageUrl: 'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=441991&type=card',
        price: 2
      },
      {
        id: 12,
        name: 'Arcanis the Omnipotent',
        imageUrl: 'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=433012&type=card',
        price: 4
      },
      {
        id: 13,
        name: 'Kamahl, Pit Fighter',
        imageUrl: 'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=29963&type=card',
        price: 4
      },
      {
        id: 14,
        name: 'Thragtusk',
        imageUrl: 'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=470731&type=card',
        price: 7
      },
      {
        id: 15,
        name: 'Siege Rhino',
        imageUrl: 'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=386666&type=card',
        price: 5
      },
      {
        id: 16,
        name: 'Jeska, Warrior Adept',
        imageUrl: 'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=36451&type=card',
        price: 6
      },
      {
        id: 17,
        name: 'Hypnotic Specter',
        imageUrl: 'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=2109&type=card',
        price: 2
      }
    ]
  },
  {
    id: 3,
    title: 'Sorceries',
    routeName: 'sorceries',
    items: [{
        id: 18,
        name: 'Wrath of God',
        imageUrl: 'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=4166&type=card',
        price: 2
      },
      {
        id: 19,
        name: 'Pyroclasm',
        imageUrl: 'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=442135&type=card',
        price: 1
      },
      {
        id: 20,
        name: 'Rampant Growth',
        imageUrl: 'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426620&type=card',
        price: 1
      },
      {
        id: 21,
        name: 'Plague Wind',
        imageUrl: 'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=442091&type=card',
        price: 10
      },
      {
        id: 22,
        name: 'Decree of Annihilation',
        imageUrl: 'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=386288&type=card',
        price: 11
      }
    ]
  },
  {
    id: 4,
    title: 'Instants',
    routeName: 'instants',
    items: [{
        id: 23,
        name: 'Ancestral Recall',
        imageUrl: 'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=382841&type=card',
        price: 500
      },
      {
        id: 24,
        name: 'Lightning Bolt',
        imageUrl: 'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=2291&type=card',
        price: 1
      },
      {
        id: 25,
        name: 'Dark Ritual',
        imageUrl: 'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=19592&type=card',
        price: 2
      },
      {
        id: 26,
        name: 'Muscle Burst',
        imageUrl: 'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=29788&type=card',
        price: 1
      },
      {
        id: 27,
        name: 'Holy Day',
        imageUrl: 'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=129593&type=card',
        price: 2
      },
      {
        id: 28,
        name: 'Putrefy',
        imageUrl: 'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=470743&type=card',
        price: 5
      },
      {
        id: 29,
        name: 'Izzet Charm',
        imageUrl: 'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=456231&type=card',
        price: 15
      }
    ]
  },
  {
    id: 5,
    title: 'Enchantments',
    routeName: 'enchantments',
    items: [{
        id: 30,
        name: 'Blood Moon',
        imageUrl: 'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=442111&type=card',
        price: 50
      },
      {
        id: 31,
        name: 'Form of the Dragon',
        imageUrl: 'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=43566&type=card',
        price: 9
      },
      {
        id: 32,
        name: 'Bridge from Below',
        imageUrl: 'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=456683&type=card',
        price: 75
      },
      {
        id: 33,
        name: 'Curiosity',
        imageUrl: 'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=442041&type=card',
        price: 50
      },
      {
        id: 34,
        name: 'Oblivion Ring',
        imageUrl: 'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=397760&type=card',
        price: 5
      },
      {
        id: 35,
        name: 'Moat',
        imageUrl: 'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=159308&type=card',
        price: 100
      }
    ]
  }
]

export default SHOP_DATA;
