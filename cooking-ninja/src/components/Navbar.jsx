import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
    return (
        <div className='navbar'>
            <nav>
                <Link className="logo" to={"/"}><h1>Cooking Ninja</h1></Link>
                <Link to={"/create"}>Create Recipie</Link>
            </nav>
        </div>
    )
}
