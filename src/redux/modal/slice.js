import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  modalIsOpen: false,
  modalFiltersIsOpen: false,
  beforeClose: false,
  afterOpen: false,
};

export const Modals = createSlice({
  name: 'modals',
  initialState: INITIAL_STATE,
  reducers: {
    changeModal(state, action) {
      state.modalIsOpen = action.payload;
      state.modalFiltersIsOpen = action.payload;
    },
    changeFiltersModal(state, action) {
      state.modalIsOpen = action.payload;
      state.modalFiltersIsOpen = action.payload;
    },
    changeBeforeClose(state, action) {
      state.beforeClose = action.payload;
    },
    changeAfterOpen(state, action) {
      state.afterOpen = action.payload;
    },
  },
});

export const {
  changeModal,
  changeFiltersModal,
  changeBeforeClose,
  changeAfterOpen,
} = Modals.actions;
export const modalsReducer = Modals.reducer;
