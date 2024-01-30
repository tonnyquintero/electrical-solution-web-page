import React from 'react'
import Image from 'next/image'
import banner from '../assets/banner.png'

const Info = () => {
  return (
    <div>
      <Image alt="banner" src={banner}></Image>
    </div>
  )
}

export default Info