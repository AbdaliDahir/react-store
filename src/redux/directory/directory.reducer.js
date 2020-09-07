
const INITIAL_STATE = {
  homeCategories: [
    {
      title: 'hats',
      imageUrl: 'https://i.pinimg.com/564x/d6/c9/0c/d6c90ce5c9795462191a22b94f2ea4ce.jpg',
      id: 1,
      linkUrl: "shop/hats"
    },
    {
      title: 'jackets',
      imageUrl: 'https://i.pinimg.com/564x/c5/36/5a/c5365aa5f17340f8fb36d01ce8520aa9.jpg',
      id: 2,
      linkUrl: "shop/jackets"
    },
    {
      title: 'sneakers',
      imageUrl: 'https://i.pinimg.com/564x/55/1c/da/551cdab5b42f82fc5d6ed0061f89b5e9.jpg',
      id: 3,
      linkUrl: "shop/sneakers"
    },
    {
      title: 'womens',
      imageUrl: 'https://i.pinimg.com/564x/15/14/52/151452c67f1dcd28f1c486743be75d76.jpg',
      size: 'large',
      id: 4,
      linkUrl: "shop/womens"
    },
    {
      title: 'mens',
      imageUrl: 'https://i.pinimg.com/564x/22/fc/56/22fc56bf7efdbbe475be85042d267dac.jpg',
      size: 'large',
      id: 5,
      linkUrl: "shop/mens"
    }
  ]
}

const direcotryReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    default:
      return state
  }
}

export default direcotryReducer