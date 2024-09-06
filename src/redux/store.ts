import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from './api/baseApi';

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

import authReducer from './features/auth/authSlice';
import bookingReducer from './features/booking/bookingSlice';

// Auth persist config
const authPersistConfig = {
  key: 'auth',
  storage, // Uses localStorage
};

// Booking persist config
const bookingPersistConfig = {
  key: 'booking',
  storage, // Uses localStorage
};

// Apply persistence to auth and booking reducers
const persistedAuthReducer = persistReducer(
  authPersistConfig,
  authReducer
);
const persistedBookingReducer = persistReducer(
  bookingPersistConfig,
  bookingReducer
);

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer, // Add API slice reducer
    auth: persistedAuthReducer, // Persisted auth reducer
    booking: persistedBookingReducer, // Persisted booking reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER, // Ignore non-serializable Redux Persist actions
        ],
      },
    }).concat(baseApi.middleware), // Add API middleware
});

// Persist store
export const persistor = persistStore(store);

// Export types for usage
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
