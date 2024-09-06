import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  filters: {
    AC: false,
    bathroom: false,
    form: '',
    kitchen: false,
    location: '',
    transmission: '',
    tv: false,
  },
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: INITIAL_STATE,
  reducers: {
    filters(state, action) {
      state.filters = action.payload;
    },
  },
});

export const { filters } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
