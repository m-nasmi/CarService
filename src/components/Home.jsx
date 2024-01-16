import React from 'react';
import carServiceBackground from '../assets/homepage.jpg';

const Home = () => {
  const backgroundStyle = {
    backgroundImage: `url(${carServiceBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
  };

  return (
    <div style={backgroundStyle}>
      <div className='text-5xl flex items-center justify-center p-80 text-cyan-500 font-bold'>WELCOME TO OUR CAR SERVICE.....</div>
    </div>
  );
};

export default Home;