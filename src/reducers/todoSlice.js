import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        Value: [
            {
                'name': 'Limpiar el comedor'
            }
        ]
    },
    reducers: {
        addTodo: (state, action ) => {
            console.log(action.payload);
            state.Value.push(action.payload);
        },
        initAddTodo: (state, action) => {
            console.log(action.payload);
            state.Value.push(action.payload);
        }
    }
})

export const { addTodo, initAddTodo } = todoSlice.actions
export const selectTools = (state) => state.todos.Value
export const todoReducer = todoSlice.reducer
