import React from 'react'

function Hero() {
  return (
    <div className=' py-12  px-12 md:flex md:justify-between w-full'>
      <div className='w-3/5'>
        <div className='text-gray-500 mb-3 w-full mb-8'>
          <p className='mb-4 text-6xl'><span className='text-orange-700 text-8xl '>Drive</span>, Everything you need to own a car</p>
          <p className='text-2xl font-light'>It is easier to get a car than ever. Start by creating an account and buy a car of your choice</p>
          
        </div>
        <div className='w-half'>
            <a href='/' className='px-6 py-2 bg-red-500 text-white font-[poppins] rounded hover:bg-red-400 transition duration:300'>Sign Up</a>
        </div>
      </div>
      <div className='w-4/5'>
        <div className='w-full md:flex md:justify-end'>
          <img src='/images/car.svg' className='h-64 lg:h-96 jump' alt='car' />
        </div>
      </div>

    </div>
  )
}

export default Hero