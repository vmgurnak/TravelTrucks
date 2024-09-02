import { createAsyncThunk } from '@reduxjs/toolkit';

import { requestCampers } from '../../utils/api';

export const fetchCampersRequest = createAsyncThunk(
  'campers/fetchAllCampers',
  async (_, thunkAPI) => {
    try {
      const data = await requestCampers();
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
