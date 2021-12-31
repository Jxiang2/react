import {Switch, BrowserRouter, Route} from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/HomePage/Home'
import Create from './pages/CreatePage/Create'
import Search from './pages/SearchPage/Search'
import Recipie from './pages/RecipiePage/Recipie'

// styles
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path='/'><Home/></Route>
          <Route exact path='/create'><Create/></Route>
          <Route exact path='/search'><Search/></Route>
          <Route exact path='/recipies/:id'><Recipie/></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
