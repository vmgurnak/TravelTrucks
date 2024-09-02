import { createSlice, createSelector } from '@reduxjs/toolkit';

import { fetchCampersRequest } from './operations';

const INITIAL_STATE = {
  items: [],
  loading: false,
  error: null,
};

const handlePending = state => {
  state.loading = true;
  state.error = false;
};

const handleRejected = state => {
  state.loading = false;
  state.error = true;
};

export const campersSlice = createSlice({
  name: 'campers',
  initialState: INITIAL_STATE,

  extraReducers: builder =>
    builder
      .addCase(fetchCampersRequest.pending, handlePending)
      .addCase(fetchCampersRequest.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchCampersRequest.rejected, handleRejected),
});

export const campersReducer = campersSlice.reducer;
