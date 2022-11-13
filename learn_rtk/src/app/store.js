import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import { compose } from "@reduxjs/toolkit";

function newDispatch(createStore) {
    return function (reducer, preLoadedState, enhancers) {
        let store = createStore(reducer, preLoadedState, enhancers);

        function newDispatch(action) {
            const result = store.dispatch(action);
            console.log("Hello world, Perform LOgging");
            return result;
        }
        return { ...store, dispatch: newDispatch };
    };
}

function newState(createStore) {
    return function (reducer, preLoadedState, enhancers) {
        let store = createStore(reducer, preLoadedState, enhancers);

        function newState() {
            return {
                ...store.getState(),
                hai: "Hello world",
            };
        }
        return { ...store, getState: newState };
    };
}

const enhancers = compose(newDispatch, newState);

//create store
export const store = configureStore({
    reducer: counterReducer,
    enhancers,
});
