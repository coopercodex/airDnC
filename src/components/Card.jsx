import React, { useEffect, useState } from 'react'

export const Card = () => {
  const [location, setLocation] = useState([])

  useEffect(() => {
    getData()
  }, [])
  const getData = () => {
    fetch('https://public.opendatasoft.com/api/records/1.0/search/?dataset=airbnb-listings&q=&facet=host_response_time&facet=host_response_rate&facet=host_verifications&facet=city&facet=country&facet=property_type&facet=room_type&facet=bed_type&facet=amenities&facet=availability_365&facet=cancellation_policy&facet=features&refine.city=Denver')
    .then(res => res.json())
    .then(data => {
      // console.log(data)
      setLocation(data.records)
    })
  }
  console.log(location)
  return (
    
    <div className='card-container'>
      {location.map(place => (
        <div className='card' key={`${place.fields.id}`}>
        <div className='card-info'>
          <img src={`${place?.fields.thumbnail_url}`} alt='house-layout' />
          <h3>{place?.fields.property_type}</h3>
          <h4>{place?.fields.smart_location}</h4>
          <p>{place.fields.summary}</p>
          <h4>${place.fields.price}/night</h4>
        </div>
        </div>
      ))}
    </div>
  )
}
