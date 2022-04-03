import { useContext } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import UseHttp from "./pages/Http";
import UseHistory from "./pages/UseHistory";
import UseRef from "./pages/UseRef";
import { themeContex } from "./contexts/themeContext";
import "./App.css";


function App () {
  const context = useContext(themeContex);
  // use context
  const globlaTheme = context?.backgroundColor;
  const setTheme = () => {
    if (globlaTheme === "#947673") {
      context?.changeTheme("#ada0a0");
    } else {
      context?.changeTheme("#947673");
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <span><Link to="/">ReactTS Playground</Link></span>
          <div className='links'>
            <Link to="/ref">useRef</Link>
            <Link to="/navigate">useNavigate</Link>
            <Link to="/http">useHttp</Link>
            <button onClick={ setTheme }>Macrotheme</button>
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
