import { combineReducers } from 'redux';
import cartItemSlice from '../store/reducers/cartItem/CartItem.slice';
import { RootReduxState } from './redux.type';

const rootReducer = combineReducers<RootReduxState>({
  cartItemSlice
});

export default rootReducer;
