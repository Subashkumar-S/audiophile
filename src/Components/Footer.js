import React from 'react'
import { ReactComponent as Facebook } from '../assets/socials/facebook.svg'
import { ReactComponent as Instagram } from '../assets/socials/instagram.svg'
import { ReactComponent as Twitter } from '../assets/socials/twitter.svg'
const Footer = () => {
  return (
    <section className='flex flex-col gap-10 bg-gray-950 text-white text-center '>
      <div>
        <h4>audiophile</h4>
        <ul className='uppercase'>
          <li>Home</li>
          <li>Headphones</li>
          <li>Speakers</li>
          <li>Earphones</li>
        </ul>
      </div>
      <p className='text-gray-500'>Audiophile is an all in one stop to fulfill your audio needs. 
        We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. 
        Come and visit our demo facility - we’re open 7 days a week.
      </p>
      <div className='flex flex-col items-center'>
        <p>Copyright 2021. All Rights Reserved</p>
        <div className='flex gap-4'>
          <Facebook/>
          <Instagram />
          <Twitter />
        </div>
      </div>
    </section>
  )
}

export default Footer