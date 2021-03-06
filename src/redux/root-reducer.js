import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import direcotryReducer from './directory/directory.reducer';
import collectionReducer from './collections/collection.reducer';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: direcotryReducer,
  collection: collectionReducer
});

export default persistReducer(persistConfig, rootReducer)