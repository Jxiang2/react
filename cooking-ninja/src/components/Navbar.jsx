import { Link } from 'react-router-dom'
import './Navbar.css'
import SearchBar from './SearchBar'

export default function Navbar() {
    return (
        <div className='navbar'>
            <nav>
                <Link className="logo" to={"/"}><h1>Cooking Ninja</h1></Link>
                <SearchBar/>
                <Link to={"/create"}>Create Recipie</Link>
            </nav>
            
        </div>
    )
}
