import { useContext } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import UseHttp from "./pages/Http";
import UseHistory from "./pages/UseHistory";
import UseRef from "./pages/UseRef";
import { ThemeContex } from "./contexts/ThemeContext";

import "./App.css";


function App () {

  const theme = useContext(ThemeContex);
  console.log(theme);


  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <span><Link to="/">ReactTS Playground</Link></span>
          <div className='links'>
            <Link to="/ref">useRef</Link>
            <Link to="/navigate">useNavigate</Link>
            <Link to="/http">useHttp</Link>
            <button>Macrotheme</button>
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
