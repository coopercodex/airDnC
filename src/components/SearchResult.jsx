import React from 'react'
import { useState, useEffect } from 'react'
import { FiHeart } from 'react-icons/fi'
import { AiFillStar } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToFavorite } from '../slices/favoriteSlice'


export const SearchResult = () => {
  const [location, setLocation] = useState([])
  const cities = ['Paris', 'London', 'Berlin', 'New+York', 'Roma', 'Barcelona', 'Brooklyn', 'Austin', 'Amsterdam', 'Toronto', 'Vienna', 'Saint-Gilles', 'Bondi', 'New+Orleans']
  const [randomCity, setRandomCity] = useState(cities[Math.floor(Math.random() * cities.length)])
  const dispatch = useDispatch();



  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    fetch(`https://public.opendatasoft.com/api/records/1.0/search/?dataset=airbnb-listings&q=&facet=host_response_time&facet=host_response_rate&facet=host_verifications&facet=city&facet=country&facet=property_type&facet=room_type&facet=bed_type&facet=amenities&facet=availability_365&facet=cancellation_policy&facet=features&refine.city=${randomCity}`)
      .then(res => res.json())
      .then(data => {
        setLocation(data.records)
      })
  }

  const addLocationToFavorites = () => {
    const places = {
      location
    }
    dispatch(addToFavorite(places))
  }

  // console.log(locations)
  return (location.length > 0) ?  (
    <div className='search-results-container'>
      {location?.map(place => (
        <div className='search-results' key={`${place.fields.id}`}>
          <Link to={`/cardDetails/${place.fields.id}`}> 
              <img src={`${place?.fields.thumbnail_url}`} alt='house-layout' />
              </Link>
          <FiHeart className='search-results-heart' onClick={addLocationToFavorites} />
          <div className='search-results-info'>
            <div className='search-results-infoTop'>
              <h3>{place?.fields.property_type}</h3>
              <p>{place?.fields.smart_location}</p>
              <p>___________________</p>
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
  ) :<div className='loading-container'><img className='loading' src='https://miro.medium.com/max/1400/1*Gvgic29bgoiGVLmI6AVbUg.gif' alt='loading gif' /></div>
}
