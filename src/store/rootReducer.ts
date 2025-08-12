import { combineReducers } from '@reduxjs/toolkit';
import { favoriteSlice } from './slices';

export const rootReducer = combineReducers({
  favorite: favoriteSlice,
});
