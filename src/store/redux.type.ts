import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { cartItemsType } from '../types/redux/cartItem.type';

export interface RootReduxState {
  cartItemSlice: cartItemsType;
}

export type AppDispatch = ThunkDispatch<RootReduxState, unknown, Action<string>>;
