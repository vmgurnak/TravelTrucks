import { createSelector } from '@reduxjs/toolkit';
import { selectFilters } from '../filters/selectors.js';

export const selectCampers = state => state.campers.items;
export const selectLoading = state => state.campers.loading;
export const selectError = state => state.campers.error;

export const selectFilteredCampers = createSelector(
  [selectCampers, selectFilters],
  (items, filters) => {
    const filteredCampers = items.filter(
      camper =>
        camper.location.toLowerCase().includes(filters.location.toLowerCase())
      // Object.entries(filters).every(([key, value]) => camper[key] === value)
    );
    return filteredCampers;
  }
);
