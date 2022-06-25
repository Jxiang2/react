import ReactDOM from "react-dom/client";

import App from "./App";
import { ThemeContexProvider } from "./contexts/themeContext";

import "./index.css";


const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <ThemeContexProvider>
    <App/>
  </ThemeContexProvider>
);