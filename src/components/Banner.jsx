import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
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
        <h5>Plan a different kind of getaway to uncover the hidden gems all over the world.</h5>
        <button>
          <Link style={{textDecoration: 'none', color: 'black'}} to="/search" >Click To Explore A Random Destination!</Link>
        </button>
      </div>
    </div>
  )
}
