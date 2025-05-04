import { configureStore } from '@reduxjs/toolkit'
import { todoReducer } from './reducers/todoSlice'
import { goalReducer } from './reducers/goalSlice'

export default configureStore({
    reducer: {
        todos: todoReducer,
        goals: goalReducer
    }
})