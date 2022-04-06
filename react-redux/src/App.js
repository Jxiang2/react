import { useSelector, useDispatch } from "react-redux";
import { actions } from "./store/store";
import './App.css';

function App () {
  let counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(actions.increment());
  };

  const decrement = () => {
    dispatch(actions.decrement());
  };

  const addBy = () => {
    dispatch(actions.addBy(10));
  };

  return (
    <div className="App">
      <h1>counter app</h1>
      <h2>{ counter }</h2>
      <button onClick={ increment }>Increment</button>
      <button onClick={ decrement }>Decrement</button>
      <button onClick={ addBy }>Add By 10</button>
    </div >
  );
}

export default App;
