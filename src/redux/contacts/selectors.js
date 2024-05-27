import { selectNameFilter } from '../filters/selectors';
import { createSelector } from '@reduxjs/toolkit';

export const selectLoading = state => {
  state.contacts.loading;
};
export const selectError = state => state.contacts.error;
export const selectContacts = state => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filterContacts) => {
    return contacts.filter(
      contact =>
        contact.name
          .toLowerCase()
          .includes(filterContacts.toLowerCase().trim()) ||
        contact.number.includes(filterContacts.trim())
    );
  }
);
