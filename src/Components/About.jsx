import React, { useEffect } from 'react';
import { TiInputChecked } from "react-icons/ti";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const titles = [
    {
      title: "Personalized Itineraries",
    },
    {
      title: "Expert Local Guides",
    },
    {
      title: "Seamless Travel Experience",
    },
    {
      title: "Exclusive Access",
    }
  ];

  useEffect(() => {
    gsap.fromTo("#about",{
      y:100,
      opacity:0,
      
    },{
      y:0,
      opacity:1,
      duration: 0.4,
      scrollTrigger: {
        trigger: "#about",
        scroller: "body",
        // markers: true,
        start: "top 90%",
        end: "top 60%",
        scrub: true,
        ease: "slow(0.7,0.7,false)"
      }

    });

  }, []);

  return (
    <section className='mb-2'>
      <div className='ml-10 p-5 '>
        <h1  className='text-gray-700 font-primary text-4xl mb-2'>About Us</h1>
        <div id="about" className='flex flex-row mt-5'>
          {titles.map((element, index) => (
            <div key={index} className='w-80 flex flex-col items-center space-y-2'>
              <div className='bg-gray-200 p-5 w-20 rounded-full'>
                <TiInputChecked size={42} />
              </div>
              <div>
                <h1 className='text-2xl text-center font-primary text-gray-800'>{element.title}</h1>
              </div>
              <div>
                <h6 className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui natus architecto iusto aut, est iure pariatur ipsum repellat vitae nam?</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
