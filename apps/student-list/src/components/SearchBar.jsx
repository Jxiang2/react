import React from 'react'

// styles 
import './SearchBar.css'

export default function SearchBar({ setAttribute, defaultContent }) {

  return (
    <div className="search-bar">
      <input
        placeholder={defaultContent}
        type="text"
        id="search"
        onChange={(e) => setAttribute(e.target.value)}
      />
    </div>
  )
}
