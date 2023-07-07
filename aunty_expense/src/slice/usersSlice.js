import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    expenses: [

    ]
}

const expensesSlice = createSlice({
    name: 'expenses',
    initialState: initialState,
    reducers: {
        addNewExpense: (state, action) => {
            state.expenses = [...state.expenses, action.payload]
        },
        deleteNewExpense: (state, action) => {
            state.expenses = state.expenses.filter((expense) => {
                if (expense.id !== action.payload)
                    return expense
            })

        },
        editNewExpense: (state, action) => {
            state.expenses = state.expenses.map((expense) => {
                if (expense.id === action.payload.id) return action.payload.newData
                return expense
            })
        },
    }
})


export const { addNewExpense, deleteNewExpense, editNewExpense } = expensesSlice.actions;
export default expensesSlice.reducer;