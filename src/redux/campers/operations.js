import { createAsyncThunk } from '@reduxjs/toolkit';

import { requestCamperID, requestCampers } from '../../utils/api';

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

export const fetchCamperRequestID = createAsyncThunk(
  'campers/fetchCamper',
  async (camperID, thunkAPI) => {
    try {
      const data = await requestCamperID(camperID);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
