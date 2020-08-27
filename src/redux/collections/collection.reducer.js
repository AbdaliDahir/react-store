import SHOP_DATA from './shop.data';

const INITIAL_SATATE = {
  collectionData: SHOP_DATA
} 

const collectionReducer = (state = INITIAL_SATATE, action) => {
  switch(action.type) {
    default:
      return state
  }
}

export default collectionReducer