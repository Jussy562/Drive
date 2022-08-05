import React from 'react'

function Hero() {
  return (
    <div className='container py-12  px-6 md:flex md:justify-between w-full'>
      <div className='w-half'>
        <div className='text-gray-500 mb-3'>
          <p><span className='text-orange-400 text-4xl'>Drive</span>,</p>
          <p className='text-2xl font-bold'>It is easier to get a car than ever. Start by creating an account today</p>
          
        </div>
        <div className=''>
            <a href='/' className='px-6 py-2 bg-red-500 text-white font-[poppins] rounded hover:bg-red-400 transition duration:300'>Sign Up</a>
        </div>
      </div>
      <div className='w-half'>
        <div>
          <img src='/images/car.svg' className='h-64 lg:h-80 jump' alt='car' />
        </div>
      </div>

    </div>
  )
}

export default Hero