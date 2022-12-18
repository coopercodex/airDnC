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
        <section className="p-menu1">
          <nav id="navbar" className="navigation" role="navigation">
            <input id="toggle1" type="checkbox" />
            <label className="hamburger1" htmlFor="toggle1">
              <div className="top"></div>
              <div className="meat"></div>
              <div className="bottom"></div>
            </label>
            <nav className="menu1">
              <Link className="link1" to="/">Home</Link>
              <Link className="link1" to="/wishlist">Wishlist</Link>
            </nav>
          </nav>
        </section>
        <Link to='wishlist' className='wishlist'><RxAvatar size={25} /> </Link>
        <span className='header-wishlist-count'>{locations.length}</span>
      </div>
    </div>
  )
}
