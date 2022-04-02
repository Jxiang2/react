import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';

import Home from './pages/HomePage/Home';
import UseEffect from './pages/UseEffect/UseEffect';
import UseHistory from './pages/UseHistory/UseHistory';
import UseReducer from './pages/UseReducer/UseReducer';
import UseRef from './pages/UseRef/UseRef';

import './App.css';

function App () {

  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <span><Link to="/">ReactTS Playground</Link></span>

          <div className='links'>
            <Link to="/ref">useRef</Link>
            <Link to="/reducer">useEffect</Link>
            <Link to="/effect">useEffect</Link>
            <Link to="/history">useHistory</Link>
            <button>Context Example</button>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/effect" element={ <UseEffect /> } />
          <Route path="/history" element={ <UseHistory /> } />
          <Route path="/reducer" element={ <UseReducer /> } />
          <Route path="/ref" element={ <UseRef /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
