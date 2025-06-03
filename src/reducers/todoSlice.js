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
            fetch('http://localhost:3001/tasks/addTask', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': '123456'
                },
                body: JSON.stringify(action.payload)
            }).catch((err) => {
                console.log(err);
            });
        },
        initAddTodo: (state, action) => {
            console.log(action.payload);
            state.Value.push(action.payload);
        },
        removeTodo: (state, action) => {
            state.Value = state.Value.filter((task) => task._id !== action.payload);
            fetch('http://localhost:3001/tasks/deleteTask'+ action.payload, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': '123456'
                },
                body: JSON.stringify(action.payload)
            }).catch((err) => {
                console.log(err);
            });
        }
    }
})

export const { addTodo, initAddTodo, removeTodo } = todoSlice.actions
export const selectTools = (state) => state.todos.Value
export const todoReducer = todoSlice.reducer
