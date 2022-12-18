import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Card = ({ title, getUrl, rowID }) => {
  const [location, setLocation] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    fetch(getUrl)
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        setLocation(data.records)
      })
  }
  // console.log(location)
  return (
    location.length > 0) ? (
    <>
      <h2>{title}</h2>
      <div className='card-container'>
        {location.map(place => (
          <div className='card' key={`${place.fields.id}`}>
            <div className='card-info'>
              <Link to={`/cardDetails/${place.fields.id}`}> 
              <img src={`${place?.fields.thumbnail_url}`} alt='house-layout' />
              </Link>
              <h3>{place?.fields.property_type}</h3>
              <h4>{place?.fields.smart_location}</h4>
              <p>{place.fields.summary}</p>
              <h4>${place.fields.price}/night</h4>
            </div>
          </div>
        ))}
      </div>
    </>
  ) : <div className='loading-container'><img className='loading' src='https://miro.medium.com/max/1400/1*Gvgic29bgoiGVLmI6AVbUg.gif'/></div>
}
