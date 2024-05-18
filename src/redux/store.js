import { configureStore } from '@reduxjs/toolkit';
import filtersReduser from './filters/slice';
import contactsReduser from './contacts/slice';
import authReduser from './auth/slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsPersistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['items'],
};

const filtersPersistConfig = {
  key: 'filter',
  storage,
  whitelist: ['name'],
};

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const pContactsReducer = persistReducer(contactsPersistConfig, contactsReduser);
const pFiltersReducer = persistReducer(filtersPersistConfig, filtersReduser);
const pAuthReducer = persistReducer(authPersistConfig, authReduser);

export const store = configureStore({
  reducer: {
    contacts: pContactsReducer,
    filters: pFiltersReducer,
    auth: pAuthReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
