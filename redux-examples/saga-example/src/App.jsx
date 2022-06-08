import "./styles/App.css"
import { petIncrement, petDecrement } from "./actions"
import { useSelector, useDispatch } from "react-redux"

function App () {
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>Welcome to React Redux Saga</h1>

    </div>
  )
}

export default App
