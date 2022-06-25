import { BrowserRouter, Route, Switch } from 'react-router-dom'

// styles
import './App.css'
import Navbar from './components/Navbar'
import ThemeSelector from './components/ThemeSelector'

import { useTheme } from './hooks/useTheme'
import Create from './pages/CreatePage/Create'
import Home from './pages/HomePage/Home'
import Recipie from './pages/RecipiePage/Recipie'
import Search from './pages/SearchPage/Search'


function App() {

  const { mode } = useTheme()

  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
        <Navbar/>
        <ThemeSelector/>
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route exact path="/create"><Create/></Route>
          <Route exact path="/search"><Search/></Route>
          <Route exact path="/recipies/:id"><Recipie/></Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
