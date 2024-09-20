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
      <div className='bg-cyan-950 w-full flex justify-center text-white font-extralight'>
        <div>
          <div className="flex justify-around space-x-12">
            {Data.map((Section) => (
              <div key={Section.id} className="p-4 mt-6">
                <h1 className="text-xl font-bold">{Section.title}</h1>
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

          <hr className="border-gray-600" />

          <div className="pt-6">
            <div className="text-center sm:flex sm:justify-between sm:text-left">
              <p className="text-sm text-gray-400">
                <span className="block sm:inline">All rights reserved.</span>
                <a
                  className="inline-block text-teal-500 underline transition hover:text-teal-500/75"
                  href="/"
                >
                  Terms & Conditions
                </a>
                <span>&middot;</span>
                <a
                  className="inline-block text-teal-500 underline transition hover:text-teal-500/75"
                  href="/"
                >
                  Privacy Policy
                </a>
              </p>
              <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
                &copy; 2022 Company Name
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
