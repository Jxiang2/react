import { Routes, Route, BrowserRouter, Link, Navigate } from 'react-router-dom';
import { useState } from 'react';

import Home from './pages/Home';
import UseEffect from './pages/UseEffect';
import UseHistory from './pages/UseHistory';
import UseReducer from './pages/UseReducer';
import UseRef from './pages/UseRef';

import './App.css';

function App () {

  const [showUseEffect] = useState(true);

  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <span><Link to="/">ReactTS Playground</Link></span>

          <div className='links'>
            <Link to="/ref">useRef</Link>
            <Link to="/reducer">useEffect</Link>
            <Link to="/effect">useEffect</Link>
            <Link to="/navigate">useNavigate</Link>
            <Link to="/go">ConditionRoute</Link>
            <button>Context Example</button>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/effect" element={ <UseEffect /> } />
          <Route path="/navigate" element={ <UseHistory /> } />
          <Route path="/reducer" element={ <UseReducer /> } />
          <Route path="/ref" element={ <UseRef /> } />

          <Route
            path='/go'
            element={ showUseEffect ? <Navigate to="/reducer" /> : <Navigate to="/ref" /> }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
