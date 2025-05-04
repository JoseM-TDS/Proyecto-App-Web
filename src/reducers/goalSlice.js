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
        }
    }
})

export const { addGoal } = goalSlice.actions
export const selectTools = (state) => state.goals.Value
export const goalReducer = goalSlice.reducer
