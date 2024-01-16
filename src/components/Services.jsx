import React, { useState } from 'react';
import fullService from '../assets/fullCarservice.jpg';
import oilChange from '../assets/oilchange.jpg';
import tyreChange from '../assets/tyrechange.jpg';
import bodyWash from '../assets/bodywash.jpg';

const Services = () => {
  const images = [fullService, oilChange, tyreChange, bodyWash];
  const [currentIndex, setCurrentIndex] = useState(0);
  const serviceTypes = ["Full Service", "Oil Change", "Tyre Change", "Body Wash" ]; 

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className='m-20'>
      <div id="gallery" className="relative w-full" data-carousel="slide">
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          {images.map((image, index) => (
            <div key={index} className={`relative ${index === currentIndex ? 'block' : 'hidden'} `}>
              <img 
                src={image}
                className=" flex bg-black bg-opacity-200 absolute  max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
                alt=""
              />
              <p className="absolute bg-black bg-opacity-200  left-1/2 transform -translate-x-1/2 text-cyan-100 text-6xl font-bold">
                {serviceTypes[index]}
              </p>
              {console.log('Current Index:', currentIndex)}
              <div className='mt-2'>
              {console.log('Service Type:', serviceTypes[currentIndex])}
              </div>
            </div>
          ))}
          <button
            type="button"
            className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
            onClick={handlePrev}
          >
           <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
          </button>
          <button
            type="button"
            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
            onClick={handleNext}
          >
           <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
            </svg>
            <span className="sr-only">Next</span>
          </span>
          </button>
        </div>
        <div className='mb-10 text-4xl flex items-center justify-center p-30 text-red-500  font-bold'>OUR SERVICES AND PRICES:</div>
    
        <div className='mb-5 text-4xl flex items-center justify-center p-30 text-blue-500  font-bold'>Full Service- Rs.15000</div>
        <div className='mb-5 text-4xl flex items-center justify-center p-30 text-blue-500  font-bold'>Oil Change- Rs.10000</div>
        <div className='mb-5 text-4xl flex items-center justify-center p-30 text-blue-500  font-bold'>Tyre Change- Rs.8000</div>
        <div className='mb-5 text-4xl flex items-center justify-center p-30 text-blue-500  font-bold'>Body Wash- Rs.2000</div>
      </div>
    </div>
  );
};

export default Services;

