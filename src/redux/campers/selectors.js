import { createSelector } from '@reduxjs/toolkit';
import { selectFilters } from '../filters/selectors.js';

export const selectCampers = state => state.campers.items;
export const selectCamper = state => state.campers.item;
export const selectLoading = state => state.campers.loading;
export const selectError = state => state.campers.error;

export const selectFilteredCampers = createSelector(
  [selectCampers, selectFilters],
  (items, filters) => {
    const filteredCampers = items.filter(camper => {
      const filterLocation = camper.location
        .toLowerCase()
        .includes(filters.location.toLowerCase());
      const filterAC = filters.AC ? filters.AC === camper.AC : true;
      const filterTransmission = filters.transmission[0]
        ? filters.transmission[0] === camper.transmission
        : true;
      const filterKitchen = filters.kitchen
        ? filters.kitchen === camper.kitchen
        : true;
      const filterTV = filters.TV ? filters.TV === camper.TV : true;
      const filterBathroom = filters.bathroom
        ? filters.bathroom === camper.bathroom
        : true;
      const filterForm = filters.form ? filters.form === camper.form : true;

      return (
        filterLocation &&
        filterAC &&
        filterTransmission &&
        filterKitchen &&
        filterTV &&
        filterBathroom &&
        filterForm
      );
      // Object.entries(filters).every(([key, value]) => camper[key] === value)
    });
    return filteredCampers;
  }
);
