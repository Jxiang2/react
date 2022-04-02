import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';

import Home from './pages/Home';
import UseEffect from './pages/UseEffect';
import UseHistory from './pages/UseHistory';
import UseReducer from './pages/UseReducer';
import UseRef from './pages/UseRef';

import './App.css';

function App () {

  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <span><Link to="/">ReactTS Playground</Link></span>

          <div className='links'>
            <Link to="/ref">useRef</Link>
            <Link to="/reducer">useReducer</Link>
            <Link to="/effect">useEffect</Link>
            <Link to="/navigate">useNavigate</Link>
            <button>Context Example</button>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/effect" element={ <UseEffect /> } />
          <Route path="/navigate" element={ <UseHistory /> } />
          <Route path="/reducer" element={ <UseReducer /> } />
          <Route path="/ref" element={ <UseRef /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
