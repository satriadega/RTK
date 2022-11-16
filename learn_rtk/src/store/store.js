import { configureStore } from "@reduxjs/toolkit";
// import booksReducer from './reducers/booksReducer';
import booksReducer from "./slices/bookSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

// const store = configureStore({
//   reducer: { books: booksReducer, auth: authReducer },
// });

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: { books: booksReducer },
    // middleware: [sagaMiddleware]
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }).concat(
            sagaMiddleware
        ),
});

sagaMiddleware.run(rootSaga);

export default store;
