import  { useEffect, useRef } from 'react';
import Card from './UI/Card';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const UpcomingTours = () => {
  const cardInfoRef = useRef(null);

  const info = [
    { image: "Picture1.png",
       place: "Janakpur", 
       placeInfo: "Rich Cultural Heritage",
        TourLength: "6 days",
         TourDate: "1st Nov" },

    { image: "Picture2.png",
       place: "Chitlang",
        placeInfo: "Tranquil Orchard Haven",
         TourLength: "12 days",
          TourDate: "10th Nov" },
    { image: "Picture3.png", place: "Bandipur", placeInfo: "Heritage HillTop Retreat", TourLength: "10 days", TourDate: "5th Nov" },
    { image: "Picture4.png", place: "Nagarkot", placeInfo: "Heritage Hills", TourLength: "2 days", TourDate: "3rd Nov" }
  ];

  useEffect(() => {
    gsap.fromTo(cardInfoRef.current,
      { x: -600, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.4,
        scrollTrigger: {
          trigger: cardInfoRef.current, 
          start: "top 80%",           
         
          end: "top 60%",
          scrub: 1,                   
          ease: "power2.out",          
        }
      }
    );
  }, []);

  return (
    <section  id="info" className="py-3 mb-5 bg-gray-100">
      <div className="ml-5 p-5">
        <div className="flex flex-col">
          <h1 className="text-center font-primary text-gray-800 text-4xl mb-2">Our Upcoming Tours</h1>
          <p className="text-sm text-center text-gray-500">Explore our Service for your vacation package</p>
        </div>
        <div ref={cardInfoRef} className="pb-5 flex flex-row justify-evenly mt-5">
          {info.map((element, index) => (
            <Card 
              key={index}
              images={element.image}
              place={element.place}
              placeInfo={element.placeInfo}
              TourLength={element.TourLength}
              TourDate={element.TourDate}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingTours;
