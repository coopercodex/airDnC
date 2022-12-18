import React from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'
import { RxAvatar } from 'react-icons/rx';
import { GrLanguage } from 'react-icons/gr'
// import { MdExpandMore } from 'react-icons/md'
import { Link } from 'react-router-dom';
import { selectItems } from '../slices/favoriteSlice';
import { useSelector } from 'react-redux';

export const Header = () => {
  const locations = useSelector(selectItems)
  return (
    <div className='header'>
      <Link to='/'> <img className='header-icon' src='https://i0.wp.com/charleshoustonbar.org/wp-content/uploads/2019/12/Airbnb-logo.jpg' alt='logo' /> </Link>

      <div className='header-middle'>
        <input
          type='text' />
        <BiSearchAlt2 />
      </div>
      <div className='header-right'>
        <p>Become a Host</p>
        <GrLanguage />
        <Link to='wishlist' className='wishlist'><RxAvatar size={25} /> </Link>
        <span className='header-wishlist-count'>{locations.length}</span>
      </div>
    </div>
  )
}
