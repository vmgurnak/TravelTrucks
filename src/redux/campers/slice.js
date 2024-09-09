import { createSlice } from '@reduxjs/toolkit';

import { fetchCamperRequestID, fetchCampersRequest } from './operations';

const INITIAL_STATE = {
  items: [],
  item: {},
  loading: false,
  error: false,
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
      .addCase(fetchCampersRequest.rejected, handleRejected)
      .addCase(fetchCamperRequestID.pending, handlePending)
      .addCase(fetchCamperRequestID.fulfilled, (state, action) => {
        state.item = action.payload;
        state.loading = false;
      })
      .addCase(fetchCamperRequestID.rejected, handleRejected),
});

export const campersReducer = campersSlice.reducer;
