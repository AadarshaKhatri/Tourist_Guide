import React from 'react'
import { useState, useEffect } from 'react'
import { FaAngleLeft, FaAngleRight, FaRightLeft, FaStar } from 'react-icons/fa6'


const Testimonials = () => {
  const [currentSlide , setcurrentSlide ] = useState(0);
  const slides = [
    {
      image: "src/assets/pfp1.png", 
      name: "Christina",
      nameInfo: "Adventure Seeker",
      rating: 5,
      description: "An incredible place filled with rich culture and history. The locals are welcoming, and each moment is a new discovery. Truly unforgettable!"
    },
    {
      image: "src/assets/pfp2.jpg", 
      name: "Aadarsha",
      nameInfo: "Rider",
      rating: 4,
      description: "From vibrant markets to stunning landscapes, every day felt like an adventure. Such a perfect mix of relaxation and excitement!"
    },
    {
      image: "src/assets/pfp3.jpeg",  
      name: "Liam",
      nameInfo: "Nature Lover",
      rating: 5,
      description: "The serenity and beauty of the mountains is unmatched. A paradise for nature lovers."
    }
  ];
  function handleNext (){
    setcurrentSlide((prevIndex)=> (prevIndex+1) % slides.length)

  }
  function handlePrevious (){
    setcurrentSlide((prevIndex)=> (prevIndex-1+ slides.length) %slides.length)
  };

  const show = slides[currentSlide]

    
  

  return (
    <>
    <section  className='ml-10 mb-5'>
      <div>
      <h1  className='text-gray-700 font-primary text-4xl mb-2'>Testimonials</h1>
      </div>

      <div className='flex flex-col items-center  justify-center'>

        {/* Title */}
        <div>
          <h4 className='text-gray-900 text-center text-2xl font-primary mb-5'>Trust our Clients</h4>
        </div>

        {/* Profile Picture */}
        <div className='mb-5'>
          <img src = {show.image} alt = "Profile Picture" style = {{width:"75px",height:"75px",borderRadius:"50%"}} ></img>
        </div>

        {/* Profile Info  */}
        <div className='mb-3'>
          <h2 className='text-2xl font-semibold text-gray-800 font-primary'>{show.name}/<span className='text-gray-500 font-light'>{show.nameInfo}</span></h2>
        </div>

        {/* Ratings */}
        <div className='flex flex-row space-x-6 mb-5 '>
        {Array.from({ length: show.rating }).map((_, i) => (
        <FaStar color  = {"orange"} size={16} key={i} />
      ))}
        </div>

        {/* Description */}

        <div>
          <h6 className='text-lg text-center mb-20 ' style = {{width:"600px"}}>{show.description}</h6>
        </div>

        {/* Dots */}
        <div className='flex flex-row space-x-3 mb-5'>
          {slides.map((_, index)=>(
            <div key = {index} style={{ width: "16px", height: "16px" }}
            className={`rounded-full ${index===currentSlide ? 'bg-gray-800': 'bg-gray-300'}`}
            > 


            </div>
          ))}
        </div>



      </div>

      {/* Buttons */}
      <div style = {{marginLeft: "420px"}} className='absolute -mt-60 space-x-96'>
      <button onClick={handlePrevious} className=' hover:bg-gray-200 rounded-full p-4'><FaAngleLeft size={24}/></button>
        <button onClick={handleNext} className='hover:bg-gray-200 rounded-full p-4'><FaAngleRight size={24}/></button>
        
      </div>



    </section>
    
    </>
  )
}

export default Testimonials