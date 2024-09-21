import React, { useState, useEffect } from 'react';

const Form = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the fade-in effect when the component mounts
    setIsVisible(true);
  }, []);

  return (
    <>
      <div
        className={`container mx-auto my-20 w-1/3 border-2 border-purple-500 bg-white transform transition-opacity duration-1000 ease-linear ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="p-5 space-y-5 shadow-xl">
          <h4 className="text-center text-3xl font-bold cursor-pointer hover:text-gray-400 hover:underline duration-500">
            Contact Us
          </h4>

          <form>
            <div className="grid grid-cols-2 gap-5">
              <input
                type="text"
                className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500"
                placeholder="First Name"
              />
              <input
                type="text"
                className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500"
                placeholder="Last Name"
              />
              <input
                type="email"
                className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2"
                placeholder="Email"
              />
              <input
                type="tel"
                className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2"
                placeholder="Phone"
              />
              <textarea
                cols="10"
                rows="5"
                className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2"
                placeholder="Write your message..."
              ></textarea>
            </div>
            <input
              type="submit"
              value="Send Message"
              className="focus:outline-none mt-5 bg-purple-500 px-4 py-2 text-white hover:text-blue-400 font-bold w-full hover:bg-blue-700 duration-500 hover:underline cursor-pointer"
            />
          </form>
        </div>
      </div>
      
    </>
  );
};

export default Form;
