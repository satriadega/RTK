import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./slices/bookSlice";

// dummy reducer will be replaced when the real reducers are created
const store = configureStore({
    reducer: { books: bookReducer },
});

export default store;
