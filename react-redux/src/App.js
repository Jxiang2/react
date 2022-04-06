// redux
import { useSelector, useDispatch } from "react-redux";
import { actions } from "./store/store";

// styles
import './App.css';

function App () {
  let counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>counter app</h1>
      <h2>{ counter }</h2>
      <button onClick={ () => dispatch(actions.increment()) }>Increment</button>
      <button onClick={ () => dispatch(actions.decrement()) }>Decrement</button>
      <button onClick={ () => dispatch(actions.addBy(10)) }>Add By 10</button>
    </div >
  );
}

export default App;
