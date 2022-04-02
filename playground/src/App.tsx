import "./App.css";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import UseHttp from "./pages/Http";
import UseHistory from "./pages/UseHistory";
import UseRef from "./pages/UseRef";

function App () {

  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <span><Link to="/">ReactTS Playground</Link></span>
          <div className='links'>
            <Link to="/ref">useRef</Link>
            <Link to="/navigate">useNavigate</Link>
            <Link to="/http">useHttp</Link>
            <button>Context Example</button>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/http" element={ <UseHttp /> } />
          <Route path="/navigate" element={ <UseHistory /> } />
          <Route path="/ref" element={ <UseRef /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
