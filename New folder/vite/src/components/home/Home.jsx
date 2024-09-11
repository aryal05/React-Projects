import React from 'react';

const Home = () => {
  return (
    <>
      <div>
        <div
          className="w-screen h-screen bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: 'url("/images/head.jpeg")' }}
        >
          <h1 className='text-white font-bold hover:text-teal-400 hover:underline cursor-pointer inline-block duration-300'>
            Welcome 
          </h1>
          <div className='flex justify-center items-center h-screen'>
  <div className="w-72 h-24 flex justify-center items-center font-bold bg-orange-200 text-center rounded-full transition duration-300 hover:bg-orange-400 cursor-pointer">
    <h1>Find Your Stay</h1>
  </div>
</div>
erroor chec


        </div>
        <div>
          {/* Additional content here */}
        </div>
      </div>
    </>
  );
};

export default Home;
