import "./App.css";
import { useSelector, useDispatch } from "react-redux";

function App() {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter.counter);

    // function render() {
    //     const state = store.getState();

    //     console.log(state);
    //     document.getElementById("counter").innerHTML = state.counter;
    // }
    // render();

    // store.subscribe(render);

    // document.getElementById("increment").addEventListener("click", function () {
    //     store.dispatch(increment());
    // });

    // document.getElementById("decrement").addEventListener("click", function () {
    //     store.dispatch(decrement());
    // });

    return (
        <div className="App">
            <div>Counter Example</div>
            <div id="counter">{counter}</div>
            <div>
                <button onClick={() => dispatch("increment")}>Increment</button>
                <button onClick={() => dispatch("decrement")}>Decrement</button>
            </div>
        </div>
    );
}

export default App;
