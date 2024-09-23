import React from 'react';

const Post = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center border-2 bg-cyan-950 rounded-xl text-white p-6 md:p-8 lg:p-12">
      <div className="flex-1 text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 underline decoration-slate-600">Reason Behind</h1>
        <p className="w-full md:w-80 font-extralight text-base md:text-lg lg:text-xl leading-relaxed">
          Explore the items you need with us, backed by over 5 years of trust from our valued customers and reliable service. We offer a diverse range of high-quality products designed to meet your every need. With a commitment to excellence, we ensure fast delivery, exceptional customer support, and a seamless shopping experience that you can rely on, time and time again.
          <br />
          Join our community of satisfied shoppers and discover why we are a trusted name in the industry.
        </p>
      </div>
      <div className="flex-1">
        <img
          src="images/bg.avif"
          className="w-full max-w-xs md:max-w-sm lg:max-w-md mb-9 justify-center mt-10 rounded-xl hover:scale-90 hover:shadow-xl hover:shadow-green-900 transition-transform duration-300 ease-in-out"
          alt="Background"
        />
      </div>
    </div>
  );
};

export default Post;
