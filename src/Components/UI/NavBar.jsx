import React from 'react'


const NavBar = () => {
  return (
    <>
    <nav className='p-10 justify-end md:justify-between font-primary'>
      
        <div className='flex flex-row justify-between items-center'>
          <div>
            <h1 className='text-2xl font-bold font-mono text-gray-300'> Tourist Guide </h1>
          </div>
      
          <div className='flex flex-row space-x-10'>
          <a href = "/" className='text-white text-lg hover:underline'>About us</a>
          <a href = "/" className='text-white text-lg hover:underline'>Discover</a>
          <a href = "/" className='text-white text-lg hover:underline'>Contacts</a>
          
          </div>
        </div>
        
  
    
    </nav>
    
    </>
  )
}

export default NavBar