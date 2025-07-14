import { configureStore } from '@reduxjs/toolkit';
import { propertiesApi } from './propertiesApi';

export const store = configureStore({
    reducer: {
        [propertiesApi.reducerPath]: propertiesApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(propertiesApi.middleware),
});

// Tipos para TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
