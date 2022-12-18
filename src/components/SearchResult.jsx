import React from 'react'
import { useState, useEffect } from 'react'
import { FiHeart } from 'react-icons/fi'
import { AiFillStar } from 'react-icons/ai'

export const SearchResult = () => {
  const [location, setLocation] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
        
    fetch('https://public.opendatasoft.com/api/records/1.0/search/?dataset=airbnb-listings&q=&facet=host_response_time&facet=host_response_rate&facet=host_verifications&facet=city&facet=country&facet=property_type&facet=room_type&facet=bed_type&facet=amenities&facet=availability_365&facet=cancellation_policy&facet=features&refine.city=berlin')
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        setLocation(data.records)
      })
  }
  console.log(location)
  return (location.length > 0) ?  (
    <div className='search-results-container'>
      {location.map(place => (
        <div className='search-results' key={`${place.fields.id}`}>
          <img src={`${place?.fields.thumbnail_url}`} alt='house-layout' />
          <FiHeart className='search-results-heart' />
          <div className='search-results-info'>
            <div className='search-results-infoTop'>
              <h3>{place?.fields.property_type}</h3>
              <p>{place?.fields.smart_location}</p>
              <p>____</p>
              <p>{place.fields.summary}</p>
            </div>
            <div className='search-results-infoBottom'>
              <div className='search-results-stars'>
                <p>
                  <AiFillStar color='red'/>
                  {place.fields.review_scores_rating}/100
                </p>
              </div>
              <div className='search-results-price'><p>${place.fields.price}/night
              </p>
              </div>
            </div>
          </div>
        </div>
      ))}
      </div>
  ) : <h1 className='loading'>Loading...</h1> 
}
