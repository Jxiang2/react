import React from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import About from "./pages/About";
import Articles from "./pages/Articles";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <h1>SSR Example</h1>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/articles">Articles</Link>
          </li>
        </ul>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/articles" element={<Articles />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
