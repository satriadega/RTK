import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./slices/bookSlice";
import authReducer from "./slices/authSlice";

// dummy reducer will be replaced when the real reducers are created
const store = configureStore({
    reducer: { books: bookReducer, auth: authReducer },
});

export default store;
