import "./App.css";
import { useDispatch } from "react-redux";
import { store } from "./app/store";

function App() {
    const dispatch = useDispatch();

    function render() {
        const state = store.getState();

        console.log(state);
        document.getElementById("counter").innerHTML = state.counter;
    }
    render();

    store.subscribe(render);

    document.getElementById("increment").addEventListener("click", function () {
        store.dispatch(increment());
    });

    document.getElementById("decrement").addEventListener("click", function () {
        store.dispatch(decrement());
    });

    return (
        <div className="App">
            <div>Counter Example</div>
            <div id="counter">0</div>
            <div>
                <button id="increment" onClick={() => dispatch(increment())}>
                    Increment
                </button>
                <button id="decrement">Decrement</button>
            </div>
        </div>
    );
}

export default App;
