import { configureStore } from "@reduxjs/toolkit";
import { compose } from "redux";

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

//reducer
function counterReducer(state = initialState, action) {
    if (action.type === "increment") {
        return {
            ...state,
            counter: state.counter + 1,
        };
    }

    if (action.type === "decrement") {
        return {
            ...state,
            counter: state.counter - 1,
        };
    }

    return state;
}

//create store
export const store = configureStore({
    reducer: counterReducer,
    enhancers,
});
