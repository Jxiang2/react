import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar';

// pages
import Home from './pages/HomePage/Home';
import Login from './pages/LoginPage/Login';
import Signup from './pages/SignupPage/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Switch><Route exact path='/'><Home/></Route></Switch>
        <Switch><Route exact path='/signup'><Signup/></Route></Switch>
        <Switch><Route exact path='/login'><Login/></Route></Switch>
      </BrowserRouter>

    </div>
  );
}

export default App
