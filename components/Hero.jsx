import React from 'react'
import Image from 'next/image'
import newImage from '../public/images/newImage.jpg'

const Hero = () => {
  return (
    //herosection --w-95%
    <section className='mt-32 w-[95%] max-w-[900px] mx-auto '>
        <h1 className='text-6xl font-clashDisplay font-[700] text-center'>Suzan Rana</h1>
        <h4 className='text-2xl font-medium text-center py-2'>Developer and designer</h4>
        <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa necessitatibus molestiae itaque dicta, ratione sed minima repudiandae facilis ex dignissimos.</p>
        <div className='flex justify-center gap-6 my-6'>
            <a className='bg-blue-500 px-4 py-2 text-white rounded-md shadow-md cursor-pointer'>Contact me</a>
            <a className='bg-blue-500 px-4 py-2 text-white rounded-md shadow-md cursor-pointer'>Resume</a>
        </div>
        <div className='overflow-hidden w-[80%] max-w-[800px] mx-auto rounded-full border-yellow-400'>
            <Image src={newImage} layout="responsive" />
        </div>
    </section>
  )
}

export default Hero;