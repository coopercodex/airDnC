import React from 'react'

export const Banner = () => {
  return (
    <div className='banner'>
      <div className='banner-search'>
        <button className='search-button'>Search Dates</button>
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
