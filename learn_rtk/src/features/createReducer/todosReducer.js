import { createReducer } from "@reduxjs/toolkit";

// without createReducer
/* function todosReducer(state = [], action) {
    switch (action.type) {
        case "ADD_TODO": {
            return state.concat(action.payload);
        }
        case "TOGGLE_TODO": {
            const { index } = action.payload;
            return state.map((todo, i) => {
                if (i !== index) return todo;

                return {
                    ...todo,
                    completed: !todo.completed,
                };
            });
        }
        case "REMOVE_TODO": {
            return state.filter((todo, i) => i !== action.payload.index);
        }
        default:
            return state;
    }
} */

// with createReducer
const todosReducer = createReducer([], (builder) => {
    builder
        .addCase("ADD_TODO", (state, action) => {
            // "mutate" the array by calling push()
            state.push(action.payload);
        })
        .addCase("TOGGLE_TODO", (state, action) => {
            const todo = state[action.payload.index];
            // "mutate" the object by overwriting a field
            todo.completed = !todo.completed;
        })
        .addCase("REMOVE_TODO", (state, action) => {
            // Can still return an immutably-updated value if we want to
            return state.filter((todo, i) => i !== action.payload.index);
        });
});
