import React from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion

const Footer = () => {
  const Data = [
    { id: 1, title: "About Us", infos: ["Company", "History", "Meet the Team", "Employee Handbook", "Careers"] },
    { id: 2, title: "Our Services", infos: ["Web Development", "Web Design", "Marketing", "Google Ads"] },
    { id: 3, title: "Helpful Links", infos: ["FAQs", "Support", "Live Chat"] },
    { id: 4, title: "Contact Us", infos: ["john@doe.com", "0123456789", "213 Lane, NeyTown, DipxTaxManOG"] },
  ];

  // Animation variants for list items
  const listItemVariants = {
    hidden: { y: 30, opacity: 0 },  // Start position below and invisible
    visible: { y: 0, opacity: 1 },  // Slide to the original position and fade in
  };

  return (
    <>
      <div className="bg-cyan-950 w-full flex justify-center text-white font-extralight">
        <div className="w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
          {/* Section for lists */}
          <div className="flex flex-col sm:flex-row sm:justify-around sm:space-x-12 mt-6">
            {Data.map((Section) => (
              <div key={Section.id} className="p-4 mt-6 sm:mt-0">
                <h1 className="text-lg sm:text-xl font-bold">{Section.title}</h1>
                <ul className="mt-4 text-white font-extralight leading-9">
                  {Section.infos.map((info, index) => (
                    <motion.li
                      key={index}
                      variants={listItemVariants} // Apply the variants
                      initial="hidden"            // Start as hidden
                      whileInView="visible"       // Animate to visible when in view
                      viewport={{ once: true }}   // Animate only once
                      transition={{ duration: 0.4, delay: index * 0.2 }}  // Delay each list item for a staggered effect
                      className="transition duration-300"
                    >
                      <a href="#">{info}</a>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Horizontal rule */}
          <hr className="border-gray-600 my-6" />

          {/* Footer bottom section */}
          <div className="pt-6 mb-7">
            <div className="text-center sm:flex sm:justify-between sm:text-left">
              <p className="text-sm text-gray-400">
                <span className="block sm:inline">All rights reserved.</span>
                <a
                  className="inline-block text-teal-500 underline transition hover:text-teal-500/75 ml-2"
                  href="/"
                >
                  Terms & Conditions
                </a>
                <span className="hidden sm:inline-block">&middot;</span>
                <a
                  className="inline-block text-teal-500 underline transition hover:text-teal-500/75 ml-2"
                  href="/"
                >
                  Privacy Policy
                </a>
              </p>
              <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
                &copy; 2024 Rajat Branding
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
