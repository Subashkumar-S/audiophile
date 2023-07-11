import React from 'react'
import Headphone from '../assets/shared/desktop/image-category-thumbnail-headphones.png'
import Earphone from '../assets/shared/desktop/image-category-thumbnail-earphones.png'
import Speaker from '../assets/shared/desktop/image-category-thumbnail-speakers.png'
import {ReactComponent as IconRight} from '../assets/logo/icon-arrow-right.svg'
const ProductNav = () => {
  return (
    <div className='grid md:grid-cols-3 items-stretch uppercase gap-20 md:gap-8  justify-items-stretch px-[13vw] py-40 text-center'>
        <div className=' bg-gray-100  rounded-md flex flex-col items-center'>
            <img className='w-40 aspect-auto relative -top-10' src={Headphone} alt='Headphone'/>
            <h4>headphones</h4>
            <div className='flex items-center justify-center gap-4 text-[14px]'>
                <h5 className='opacity-50'>shop</h5>
                <IconRight />
            </div>
        </div>
        <div className='bg-gray-100  rounded-md flex flex-col items-center'>
            <img className='w-40 aspect-auto relative -top-10' src={Speaker} alt='Speaker'/>
                <h4>speaker</h4>
                <div className='flex items-center justify-center gap-4 text-[14px]'>
                    <h5 className='opacity-50'>shop</h5>
                    <IconRight />
                </div>
        </div>
        <div className='bg-gray-100  rounded-md flex flex-col items-center'>
            <img className='w-40 aspect-auto relative -top-10' src={Earphone} alt='Earphone'/>
                <h4>earphone</h4>
                <div className='flex items-center justify-center gap-4 text-[14px]'>
                    <h5 className='opacity-50'>shop</h5>
                    <IconRight />
                </div>
        </div>
    </div>
  )
}

export default ProductNav;