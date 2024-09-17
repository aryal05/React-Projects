import React from 'react';

const Home = () => {
  return (
     
    <>
      <div>
        {/* Background Image */}
        <div
          className="w-screen h-screen bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: 'url("/images/slider-bg.jpg")' }}
        >
          <div className="flex h-full items-center justify-center px-4 md:px-8 lg:px-16">
            <div className="text-center">
              {/* Responsive Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
                <span className='text-red-600'>Sale 20% Off</span>
                <br />
                <span className='text-cyan-950'>On Everything</span>
              </h1>
              {/* Responsive Paragraph */}
              <p className="text-base md:text-lg lg:text-xl mt-5 lg:mt-8 text-slate-500 mx-auto md:w-3/4 lg:w-1/2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione harum dolores consequuntur magni. Nesciunt ratione optio maxime!
              </p>

              {/* Shop Button */}
              <button className="bg-red-600 text-white border-2 border-red-600 py-2 px-5 mt-6 lg:mt-8 text-lg rounded-md hover:bg-transparent hover:text-red-600 hover:border-red-600 transition-colors duration-300">
                Shop
              </button>

            </div>
          </div>
        </div>
 
        {/* Additional Content */}
      
      </div>
    </>
  );
};

export default Home;
