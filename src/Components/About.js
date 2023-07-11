import React from 'react'
import bestGearMobile from "../assets/home/mobile/image-best-gear.jpg"
import bestGearTablet from "../assets/home/tablet/image-best-gear.jpg"
import bestGearDesktop from "../assets/home/desktop/image-best-gear.jpg"

const About = () => {
  return (
    <section className='lg:flex lg:flex-row-reverse text-center lg:justify-between md:px-[13vw] px-8 lg:text-left lg:gap-10'>
      <picture>
      <source
          srcSet={bestGearDesktop}
          media="(min-width: 1024px)" 
        />
      <source
          srcSet={bestGearTablet}
          media="(min-width: 368px)"
        />
        <img
          src={bestGearMobile} 
          alt="Best gear"
          className="max-w-full"
        />
      </picture>
      <div className='lg:w-1/2'>
        <h3 className='uppercase text-4xl font-medium'>Bringing you the <span className='text-orange-500'>best</span> audio gear</h3>
        <p className='text-base text-gray-400'>Located at the heart of New York City, 
          Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. 
          Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
        </p>
      </div>
    </section>
  )
}

export default About