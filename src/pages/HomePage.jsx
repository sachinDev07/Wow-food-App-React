import React from 'react'

import Slider from '../components/Slider'
import RestaurantMenu from '../components/RestaurantMenu'

const HomePage = () => {
  return (
    <div className='bg-white pt-[60px]'>
        <Slider />
        <RestaurantMenu />
    </div>
  )
}

export default HomePage