import {Switch, BrowserRouter, Route} from 'react-router-dom'

import { useTheme } from './hooks/useTheme'
import Navbar from './components/Navbar'
import ThemeSelector from './components/ThemeSelector'
import Home from './pages/HomePage/Home'
import Create from './pages/CreatePage/Create'
import Search from './pages/SearchPage/Search'
import Recipie from './pages/RecipiePage/Recipie'

// styles
import './App.css';




function App() {

  const {mode} = useTheme()

  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
        <Navbar/>
        <ThemeSelector/>
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
