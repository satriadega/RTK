import { configureStore } from "@reduxjs/toolkit";
// import (export default function) name
import counterReduces from "../features/counter/counterSlice";

// 1. add slice reducer to store

// create Store
export const store = configureStore({
    reducer: {
        counter: counterReduces,
    },
});
