import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import Navbar from './components/Navbar';

// pages
import Home from './pages/HomePage/Home';
import Login from './pages/LoginPage/Login';
import Signup from './pages/SignupPage/Signup';

import { useAuthContext } from './hooks/useAuthContext';

function App() {

  const { authIsReady, user } = useAuthContext()

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
        <Navbar/>

        <Switch>
          <Route exact path='/'>
            {!user && <Redirect to="/login"/>}
            { user && <Home/>}
          </Route>
        </Switch>

        <Switch>
          <Route exact path='/signup'>
          {!user && <Signup/>}
            {user && <Redirect to='/'/>}
          </Route>
        </Switch>

        <Switch>
          <Route exact path='/login'>
            {!user && <Login/>}
            {user && <Redirect to='/'/>}
          </Route>
        </Switch>
      </BrowserRouter>
      )}
    </div>
  );
}

export default App
