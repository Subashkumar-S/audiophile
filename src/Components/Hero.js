import React from 'react'

const Hero = () => {
  return (
    <section className='bg-home-mobile sm:bg-home-tablet lg:bg-home-desktop bg-cover bg-center bg-no-repeat w-full h-[70vh] md:h-screen  text-white flex items-center justify-center lg:justify-start px-[13vw]'>
        <div className='flex flex-col items-center justify-center text-center lg:items-start lg:text-left gap-6 lg:w-[40%]'>
          <h4 className='text-xl uppercase'>New product</h4>
          <h2 className='text-4xl font-bold uppercase sm:text-5xl'>xx99 mark ii headphones</h2>
          <p className='text-base'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthisiast.</p>
          <button className='bg-orange-500 uppercase px-8 py-3 text-'>see product</button>
        </div>
    </section>
  ) 
}

export default Hero