import React from 'react'
import { Banner } from './Banner'
import {Card} from './Card'
import endpoints from '../endpoints'

export const Home = () => {
  return (
    <div className='home'>
      <Banner />
      <div className='home-section'>
        {/* <Card /> */}
        <Card title="Denver Stays" getUrl={endpoints.getDenver} rID={1} />
        <Card title="San Diego Stays" getUrl={endpoints.getSanDiego} rID={2} />
        <Card title="New York Stays" getUrl={endpoints.getNewYork} rID={3} /> 
      </div>
    </div>
  )
}

