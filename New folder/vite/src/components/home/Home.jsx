import React from 'react';

const Home = () => {
  return (
    <>
      <div>
        <div
          className="w-screen h-screen bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: 'url("/images/head.jpeg")' }}
        >
          <h1 className='text-white font-bold hover:text-teal-400 hover:underline cursor-pointer inline-block'>
            Welcome here
          </h1>
        </div>
        <div>
          {/* Additional content here */}
        </div>
      </div>
    </>
  );
};

export default Home;
