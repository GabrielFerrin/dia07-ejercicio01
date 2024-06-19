import React from 'react'

function SearchBar({ searchKey, setSearchKey }) {
  return (
    <input type="text" placeholder='Search...' value={searchKey} 
      onChange={(e) => setSearchKey(e.target.value)}/>
  )
}

export default SearchBar