import { configureStore } from "@reduxjs/toolkit";
// import (export default function) name
import counterReducer from "../features/counter/counterSlice";

// 1. add slice reducer to store

// create Store
export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});
