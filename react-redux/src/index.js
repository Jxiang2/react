import ReactDOM from "react-dom/client";
import App from "./App";

// redux
import { Provider } from "react-redux";
import { store } from "./store/store";

// styles
import "./index.css";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={ store }>
    <App />
  </Provider>
);