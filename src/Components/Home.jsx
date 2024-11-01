import React, { useEffect, useState } from 'react';
import NavBar from './UI/NavBar';
import gsap from 'gsap';

const Home = () => {
  const [currentSlide, setcurrentSlide] = useState(0);

  const ImageSlider = [
    {
      image: 'src/assets/KTM.png',
      title: 'Kathmandu',
      description: 'Kathmandu Valley is celebrated for its ancient temples and UNESCO World Heritage Sites. Its unique Newari architecture, vibrant festivals, and rich craftsmanship...',
    },
    {
      image: 'src/assets/Pokhara.jpg',
      title: 'Pokhara',
      description: 'Pokhara is famous for its breathtaking natural beauty and adventure opportunities. It’s a popular destination for activities like paragliding and trekking.....',
    },
    {
      image: 'src/assets/chitwan.png',
      title: 'Chitwan',
      description: 'Chitwan is renowned for its rich wildlife and natural beauty. It’s a prime destination for jungle safaris and wildlife spotting, offering close encounters',
    },
  ];

  useEffect(() => {
  
    const slideInterval = setTimeout(() => {
      setcurrentSlide((prevIndex) => (prevIndex + 1) % ImageSlider.length);
    }, 5000); 


    gsap.fromTo(
      '#slideContent',
      { opacity: 0 },
      { opacity: 1, duration: 1.5, ease: 'power2.inOut' }
    );

    return () => clearTimeout(slideInterval);
  }, [currentSlide]);

  const slider = ImageSlider[currentSlide];

  const BodyStyle = {
    overflow: 'hidden',
    backgroundImage: `url(${slider.image})`,
    width: '100vw',
    height: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'background-image 1s ease-in-out', 
  };
  const trans = {
    backgroundColor:"rgba(255,255,255,0.4)"
  }

  return (
    <>
      <section style={BodyStyle} className="container-fluid h-auto w-full">
        <NavBar />

        <div
          id="slideContent"
          className="overflow-x-hidden flex flex-col items-center mt-20 space-y-5 "
        >
          <h1 id = "title" className="text-9xl text-center overflow-hidden text-white mb-5">{slider.title}</h1>

          <div className="px-60">
            <p className="text-lg text-center text-white mb-5">{slider.description}</p>
          </div>
          <button className="border border-white text-white p-5 w-60 rounded-full">Learn More</button>
        </div>
        <div className='flex flex-row space-x-3 mb-5 mt-32 justify-center'>
          {ImageSlider.map((_, index)=>(
            <div key = {index} style={{ width: "200px", height: "10px" }}
            className={`rounded-full ${index===currentSlide ? 'bg-gray-50': 'bg-transparent border border-white rounded-full'}`}
            > 
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
