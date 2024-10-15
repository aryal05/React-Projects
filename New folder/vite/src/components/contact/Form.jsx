import React, { useState, useEffect } from 'react';
import Service from './Service';

const Form = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Trigger the fade-in effect when the component mounts
    setIsVisible(true);
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage(''); // Clear any previous errors

    // Check for duplicate input values
    if (formData.firstName === formData.lastName) {
      setErrorMessage('First name and last name cannot be the same.');
      return;
    }

    if (formData.email === formData.phone) {
      setErrorMessage('Email and phone number cannot be the same.');
      return;
    }

    if (!formSubmitted) {
      setFormSubmitted(true);
      // Process form data here (e.g., send it to an API)
      console.log('Form Submitted:', formData);
      // Reset form and allow re-submission if needed
      setTimeout(() => setFormSubmitted(false), 2000);
    }
  };

  return (
    <>
    <div
      className={`container mx-auto my-20 w-full sm:w-2/3 md:w-1/2 lg:w-1/3 border-2 border-purple-500 bg-white transform transition-opacity duration-1000 ease-linear ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="p-5 space-y-5 shadow-xl">
        <h4 className="text-center text-2xl sm:text-3xl font-bold cursor-pointer hover:text-gray-400 hover:underline duration-500">
          Contact Us
        </h4>

        {errorMessage && (
          <p className="text-red-500 text-center font-semibold">{errorMessage}</p>
        )}

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500"
              placeholder="First Name"
              required
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500"
              placeholder="Last Name"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 sm:col-span-2"
              placeholder="Email"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 sm:col-span-2"
              placeholder="Phone"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              cols="10"
              rows="5"
              className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 sm:col-span-2"
              placeholder="Write your message..."
              required
            ></textarea>
          </div>
          <input
            type="submit"
            value={formSubmitted ? 'Submitting...' : 'Send Message'}
            className={`focus:outline-none mt-5 bg-purple-500 px-4 py-2 text-white font-bold w-full duration-500 cursor-pointer ${
              formSubmitted ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700 hover:text-blue-400 hover:underline'
            }`}
            disabled={formSubmitted}
          />
        </form>
      </div>
    </div>
    <Service/>
    </>
  
  );
};

export default Form;
