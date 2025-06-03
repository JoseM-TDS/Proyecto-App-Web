import { createSlice } from "@reduxjs/toolkit";

export const goalSlice = createSlice({
    name: 'goals',
    initialState: {
        Value: [
            {
                'name': 'Completar el trimestre en la Universidad'
            }
        ]
    },
    reducers: {
        addGoal: (state, action ) => {
            console.log(action.payload);
            state.Value.push(action.payload);
            fetch('http://localhost:3001/goals/addGoal', {
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
        initAddGoal: (state, action) => {
            console.log(action.payload);
            state.Value.push(action.payload);
        },
        removeGoal: (state, action) => {
            state.Value = state.Value.filter((task) => task._id !== action.payload);
            fetch('http://localhost:3001/goals/removeGoal'+ action.payload, {
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

export const { addGoal } = goalSlice.actions
export const selectTools = (state) => state.goals.Value
export const goalReducer = goalSlice.reducer
