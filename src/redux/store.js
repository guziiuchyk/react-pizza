import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './slices/filterSlice';
import paginationSlice from './slices/paginationSlice'

export const store = configureStore({
    reducer: {
        filter: filterReducer,
        pagination:paginationSlice,
    },
})