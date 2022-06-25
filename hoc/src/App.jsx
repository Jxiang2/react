import './App.css'
import SearchedTodos from './components/TodoList'
import SearchedUsers from './components/UserList'

function App() {
  return (
    <div className="App">
      <h2>Higher Order Components</h2>

      <div className="section">
        <SearchedUsers/>
        <SearchedTodos/>
      </div>
    </div>
  )
}

export default App
