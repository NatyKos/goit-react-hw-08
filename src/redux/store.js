import { configureStore } from '@reduxjs/toolkit';
import filtersReduser from './filtersSlice';
import contactsReduser from './contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReduser,
    filters: filtersReduser,
  },
});
