import React from 'react';

const Home = () => {
  return (
    <>
      <div>
        <div
          className="w-screen h-screen bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: 'url("/images/nbg.jpg")' }}
        >
          <div className='flex items-center justify-center'>
            <div>
          <h1 className='text-white font-bold hover:text-black mt-20 ml-44 hover:underline cursor-pointer inline-block duration-300'>
            Welcome To Our Self Serrvice 
          </h1>
          <p className='w-[700px] text-xl mt-11 text-slate-500'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione harum dolores consequuntur magni. Nesciunt ratione optio maxime!</p>
          </div>
          </div>
          <div className='flex justify-center items-center h-screen'>
  <div className="w-72 h-24 flex justify-center items-center mb-9 font-bold bg-orange-200 text-center rounded-full transition duration-300 hover:bg-orange-400 cursor-pointer">
    <h1>Find Your Product</h1>
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
