import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './SearchBar.css'

export default function SearchBar() {

  const [term, setTerm] = useState('')
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    history.push(`/search?q=${term}`)

  }

  return (
    <div className="searchBar">
      <form onSubmit={handleSubmit}>  {/* default submit action is pressing enter */}
        <input
          type="text"
          id="search"
          onChange={(e) => setTerm(e.target.value)}
        />
      </form>
    </div>
  )
}
