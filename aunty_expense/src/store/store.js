import { configureStore } from '@reduxjs/toolkit';
import expenseReducer from '../slice/usersSlice'

export const store = configureStore({
    reducer: {
        expenseReducer: expenseReducer,
    },
})