import { combineReducers } from 'redux';
import cartItemSlice from './reducers/cartItemSlice/cartItemSlice';
import { RootReduxState } from './redux.type';

const rootReducer = combineReducers<RootReduxState>({
  cartItemSlice
});

export default rootReducer;
