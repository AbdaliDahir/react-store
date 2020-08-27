
const INITIAL_STATE = {
  homeCategories: [
    {
      title: 'hats',
      imageUrl: 'https://images.unsplash.com/photo-1533055640609-24b498dfd74c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
      id: 1,
      linkUrl: "shop/hats"
    },
    {
      title: 'jackets',
      imageUrl: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
      id: 2,
      linkUrl: "shop/jackets"
    },
    {
      title: 'sneakers',
      imageUrl: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
      id: 3,
      linkUrl: "shop/sneakers"
    },
    {
      title: 'womens',
      imageUrl: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      size: 'large',
      id: 4,
      linkUrl: "shop/womens"
    },
    {
      title: 'mens',
      imageUrl: 'https://images.unsplash.com/photo-1536593998369-f0d25ed0fb1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
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