import React from 'react'
import { useState } from 'react'
import { Search } from './Search'


export const Banner = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className='banner'>
      <div className='banner-search'>
        {showSearch && <Search />}
        <button onClick={() => setShowSearch(!showSearch)}
         className='search-button'>{showSearch ? "Hide" : "Search Dates"}</button>
      </div>
      <div className='banner-info'>
        <h1>Go out and get your imagination</h1>
        <h5>Plan a different kind of getaway to uncover the hidden gems near you.</h5>
        <button>
          Explore Nearby
        </button>
      </div>
    </div>
  )
}
