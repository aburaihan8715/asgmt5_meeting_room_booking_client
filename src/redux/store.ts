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

const authPersistConfig = {
  key: 'auth',
  storage,
};
const bookingPersistConfig = {
  key: 'booking',
  storage,
};

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
    [baseApi.reducerPath]: baseApi.reducer,
    auth: persistedAuthReducer,
    booking: persistedBookingReducer,
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
          REGISTER,
        ],
      },
    }).concat(baseApi.middleware),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
