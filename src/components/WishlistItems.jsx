import React from 'react'
import { Link } from 'react-router-dom'
import { FiHeart } from 'react-icons/fi'
import { AiFillStar } from 'react-icons/ai'
import { removeFromWishlist } from '../slices/favoriteSlice'
import { useDispatch } from 'react-redux'
import {FiDelete} from 'react-icons/fi'

export const WishlistItems = ({places, id}) => {
  const dispatch = useDispatch()
  console.log(places.location[0].fields.id)
  
  const removeItemFromWishlist = () => {
    dispatch(removeFromWishlist(places.location[0].fields.id))
  }
// console.log(id)
  return ( places.location.length > 0) ?  (
    <div className='search-results-container'>
      <div className='search-results' key={`${places.location[0].fields.id}`}>
        <Link to={`/cardDetails/${places.location[0].fields.id}`}> 
            <img src={`${places.location[0].fields.thumbnail_url}`} alt='house-layout' />
            </Link>
        <FiDelete className='search-results-heart' size={20} onClick={removeItemFromWishlist} />
        <div className='search-results-info'>
          <div className='search-results-infoTop'>
            <h3>{places.location[0].fields.property_type}</h3>
            <p>{places.location[0].fields.smart_location}</p>
            <p>___________________</p>
            <p>{places.location[0].fields.summary}</p>
          </div>
          <div className='search-results-infoBottom'>
            <div className='search-results-stars'>
              <p>
                <AiFillStar color='red'/>
                {places.location[0].fields.review_scores_rating}/100
              </p>
            </div>
            <div className='search-results-price'><p>${places.location[0].fields.price}/night
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
) :<div className='loading-container'><img className='loading' src='https://miro.medium.com/max/1400/1*Gvgic29bgoiGVLmI6AVbUg.gif' alt='loading gif' /></div>
}

// 1349558