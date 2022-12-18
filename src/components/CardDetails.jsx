import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import endpoints from '../endpoints'
import { FiHeart } from 'react-icons/fi'
import { AiFillStar } from 'react-icons/ai'

export const CardDetails = () => {
  const [location, setLocation] = useState([])
  const { cardId } = useParams();

  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    fetch(`${endpoints.getCardDetails}${cardId}`)
      .then(res => res.json())
      .then(data =>
        setLocation(data.records))
  }


  console.log(location)
  return (location.length > 0) ? (
    <div className='card-search-results-container'>
      {location.map(place => (
        <div className='card-search-results' key={`${place?.fields.id}`}>
          <h4 className='search-results-heart-title'>Save</h4> <FiHeart className='card-search-results-heart' />
          <div className='search-results-info'>
            <div className='card-search-results-infoTop'>
              <h3>{place?.fields.name}</h3>
              <p>{place?.fields.street}</p>
              <p>
                <AiFillStar color='red' />
                {place?.fields.review_scores_rating}/100
              </p>
              <img src={`${place?.fields.xl_picture_url}`} alt='house-layout' />
              <h4 className='card-details-type'>{place?.fields.room_type}</h4>
              <p>____</p>
              <p>{place?.fields.description}</p>
              <div className='search-results-infoBottom'>
                <div className='search-results-stars'>
                </div>
              </div>
              <div className='card-search-results-price'><p>${place?.fields.price}/night
              </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  ) : <h1 className='loading'>Loading...</h1>

}
