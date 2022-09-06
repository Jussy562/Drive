import React from 'react'

function NavBar() {
  return (
    <nav class='bg-none  px-12 py-5 shadow md:flex md:justify-between md:item-center  text-gray-900'>
      
      
       <div className='flex justify-between item-center'>
          <a href='/' className='text-2xl text-orange-400'>
              <span>
                DRIVE
              </span>
              
          </a>
          <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button>
       </div>
        
        <div className='md:flex md:justify-between md:space-x-4' id='navbar-default'>
          {/* <div className='md:flex md:item-center text-start md:space-x-4'>
            <a href='/' className=' my-6 md:my-0 text-xl hover:text-red-500'>
              
                Home
              
            </a>
            <a href='/' className=' my-6 md:my-0 text-xl hover:text-red-500'>
              
                Buy Car
              
            </a>
            
          </div> */}
          <ul className='md:flex md:item-center'>
            <li className='mx-4 md:ml-4 ml-0 my-6 md:my-0'>
              <a href='/' className='text-xl hover:text-red-500 duration-500'>Home</a>
            </li>
            <li className='mx-4 md:ml-4 ml-0 my-6 md:my-0'>
              <a href='/' className='text-xl hover:text-red-500 duration-500'>About</a>
            </li>
            <li className='mx-4 md:ml-4 ml-0 my-6 md:my-0'>
              <a href='/' className='text-xl hover:text-red-500 duration-500'>Buy Car</a>
            </li>
            <li className='mx-4 md:ml-4 ml-0 my-6 md:my-0'>
              <a href='/' className='text-xl hover:text-red-500 duration-500'>Sell Car</a>

            </li>
            <li className='mx-4 md:ml-4 ml-0 my-6 md:my-0'>
              <a href='/' className='text-xl hover:text-red-500 duration-500'>Rent Car</a>
            </li>
            <li className='mx-4 md:ml-4 ml-0 my-6 md:my-0'>
              <a href='/' className='text-xl hover:text-red-500 duration-500'>Cart</a>
            </li>
          </ul>
          

          <div className='flex'>
            {/* <button className='px-6 py-2 mx-4  text-red-500 font-[poppins] rounded hover:bg-red-400'>
              Login
            </button> */}
            <button className='px-6 py-2 bg-red-500 text-white font-[poppins] rounded hover:bg-red-400 transition duration:300'>
              Sign up
            </button>
            
          </div>
        </div>
      
    </nav>
  )
}

export default NavBar