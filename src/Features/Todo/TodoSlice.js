import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid"; // Import nanoid to generate unique IDs

const initialState= {
    todos: [{
        id: 1,
        text: "Hello world"
    }]
}

export const todoSlice = createSlice({
    name: 'todos', // Specify the slice name
    initialState,
    reducers : {
        addTodo :  (state , action) => {
            const todo = {
               id: nanoid(), // Generate unique ID
               text: action.payload
            }
            state.todos.push(todo);
        },
        removeTodo : (state , action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        updateTodo : (state, action) => { // Uncommented updateTodo function
            const updatedTodo = action.payload;
            state.todos = state.todos.map(todo =>
                todo.id === updatedTodo.id ? updatedTodo : todo
            );
        }
    }
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions; // Include updateTodo in exported actions

export default todoSlice.reducer;
