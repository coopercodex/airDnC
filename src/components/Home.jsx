import React from 'react'
import { Banner } from './Banner'
import {Card} from './Card'

export const Home = () => {
  return (
    <div className='home'>
      <Banner />
      <div className='home-section'>
        <Card />
      </div>
    </div>
  )
}

