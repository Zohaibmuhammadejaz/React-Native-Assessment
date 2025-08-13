import { combineReducers } from '@reduxjs/toolkit';
import { favoriteSlice, chatSlice } from './slices';

export const rootReducer = combineReducers({
  favorite: favoriteSlice,
  chat: chatSlice,
});
