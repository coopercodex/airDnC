import React from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'
import {RxAvatar} from 'react-icons/rx';
import {GrLanguage} from 'react-icons/gr'
import {MdExpandMore} from 'react-icons/md'
export const Header = () => {
  return (
    <div className='header'>
      <img className='header-icon' src='https://i0.wp.com/charleshoustonbar.org/wp-content/uploads/2019/12/Airbnb-logo.jpg' alt='logo' />

      <div className='header-middle'>
        <input
          type='text' />
        <BiSearchAlt2 />
      </div>
      <div className='header-right'>
      <p>Become a Host</p>
      <GrLanguage />
      <MdExpandMore />
      <RxAvatar />
      </div>
    </div>
  )
}
