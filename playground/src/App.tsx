import { Routes, Route } from 'react-router-dom';


import './App.css';

function App () {

  return (
    <div className="App">
      <nav>
        <span>ReactTS Playground</span>

        <div className='links'>
          <div>useRef</div>
          <div>useReducer</div>
          <div>useEffect</div>
          <div>useHistory</div>
          <button>Context Example</button>
        </div>

        <Routes>
          <Route path='/' />
        </Routes>

      </nav>


    </div>
  );
}

export default App;
