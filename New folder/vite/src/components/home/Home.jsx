import React from 'react';

const Home = () => {
  return (
    <>
      <div>
        {/* Background Image */}
        <div
          className="w-screen h-screen bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: 'url("/images/nbg.jpg")' }}
        >
          <div className="flex items-center justify-center h-full">
            <div className="text-center px-5 md:px-0">
              {/* Responsive Title */}
              <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold hover:text-black mt-10 md:mt-20 hover:underline cursor-pointer inline-block duration-300">
                Welcome To Our Self Service
              </h1>
              {/* Responsive Paragraph */}
              <p className="w-full md:w-[700px] text-base md:text-xl mt-5 md:mt-11 text-slate-500">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione harum dolores consequuntur magni. Nesciunt ratione optio maxime!
              </p>
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
