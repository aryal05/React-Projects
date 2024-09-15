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
          <div className="flex h-full leading-7">
            <div className="text-center px-5 md:px-0">
              {/* Responsive Title */}
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-black mt-10 md:mt-20 leading-tight duration-300">
                <span className='text-red-600'>Sale 20% Off</span>
                <br />
                <span className='text-cyan-950'>On Everything</span>
              </h1>
              {/* Responsive Paragraph */}
              <p className="md:w-[600px] text-base md:text-xl mt-5 md:mt-11 text-slate-500 text-center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione harum dolores consequuntur magni. Nesciunt ratione optio maxime!
              </p>

              {/* Shop Button */}
              <button className="bg-red-600 w-[150px] text-white border-2 border-red-600 py-2 px-5 mt-6 md:mt-8 text-lg rounded-md hover:bg-transparent hover:text-red-600 hover:border-red-600 duration-300">
                Shop
              </button>

            </div>
          </div>
        </div>

        <div>
          {/* Additional content here */}
        </div>
      </div>
    </>
  );
};

export default Home;
