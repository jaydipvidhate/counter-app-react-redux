import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decriCount, incriCount, resetCount } from "./action";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((data) => data.count);
  return (
    <div className="App">
      <h3 className="counterTitle">Counter App</h3>
      <h6 className="countValue">{count}</h6>
      <div className="buttonsWrapper">
        <button
          onClick={() => dispatch(incriCount())}
          className="actionButtons"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decriCount())}
          className="actionButtons"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch(resetCount())}
          className="actionButtons"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
