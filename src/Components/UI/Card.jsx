import React from 'react'
import { FaLocationDot } from "react-icons/fa6";

const Card = (props) => {
  const cardImage  = {
    backgroundImage: `url("src/assets/${props.image}")`,
    backgroundSize: 'cover', // Optional: Ensures the image covers the div
    backgroundPosition: 'center',

  }
  return (
   <>
   <div id = {props.key} className='flex flex-row justify-evenly'>
   <div className='relative w-60 h-80 group' style = {cardImage}>
     {/* Hover  */}
    <div className='absolute inset-0 hidden group-hover:flex flex-col justify-between  bg-black bg-opacity-50 text-white cursor-pointer' style = {{backgroundColor:"rgba(0,0,0,0.5)"}}>

      <div className='flex flex-col h-full  justify-between'> 
        <div className='ml-3 pt-2'>
          <div className='flex flex-col'>
          <div className='flex flex-row items-center space-x-2'>
          <FaLocationDot size = {18} color='white'/>
          <div>
            <h1 className='text-lg font-primary text-white'> {props.place} </h1>
          </div>
      
          </div>
          </div>
         <div>
          <h1 className='text-white font-primary text-sm'>{props.placeInfo}</h1>
          </div>
    
        </div>

       
        <div className=' w-full h-16' style = {{backgroundColor:"rgba(255,255,255,0.7)"}}>
          <div className='flex flex-row justify-evenly p-1'>

            <div className='flex flex-col space-y-1'>
              <h1 className='text-center font-primary text-sm font-bold text-gray-800'>Tour Length</h1>
              <h1 className='text-center text-gray-600'>{props.TourLength}</h1>
            </div>

            {/* <div className=" border-l border-gray-600 mx-5 "></div>  */}
          

            <div className='flex flex-col space-y-1'>
              <h1 className='text-center font-primary text-sm font-bold text-gray-800'>Next Departure</h1>
              <h1 className='text-center text-gray-600'>{props.TourDate} </h1> 
            </div>
          </div>

        </div>
      </div>
     
      

    </div>


   </div>





 
  


   </div>
   
   </>
  )
}

export default Card