import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  modalIsOpen: false,
  modalFiltersIsOpen: false,
};

export const Modals = createSlice({
  name: 'modals',
  initialState: INITIAL_STATE,
  reducers: {
    changeModal(state, action) {
      state.modalIsOpen = action.payload;
    },
    changeFiltersModal(state, action) {
      state.modalIsOpen = action.payload;
      state.modalFiltersIsOpen = action.payload;
    },
  },
});

export const { changeModal, changeFiltersModal } = Modals.actions;
export const modalsReducer = Modals.reducer;
