import { useSelector, useDispatch } from "react-redux";
import './App.css';

function App () {
  let counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: "INC" });
  };

  const decrement = () => {
    dispatch({ type: "DEC" });
  };

  return (
    <div className="App">
      <h1>counter app</h1>
      <h2>{ counter }</h2>
      <button onClick={ increment }>Increment</button>
      <button onClick={ decrement }>Decrement</button>
    </div>
  );
}

export default App;
