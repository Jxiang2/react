import ReactDOM from "react-dom/client";

import App from "./App";
import { ThemeContexProvider } from "./contexts/ThemeContext";

import "./index.css";


const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <ThemeContexProvider>
    <App />
  </ThemeContexProvider>
);