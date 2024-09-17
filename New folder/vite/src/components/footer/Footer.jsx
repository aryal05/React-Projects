import React from 'react'

const Footer = () => {
  const Data = [
    { id: 1, title: "About Us", infos: ["Company", "History","Meet the Team","Employee Handbook","Careers"] },
    { id: 1, title: "Our Services", infos: ["Web Development","Web Design","Marketing", "Google Ads"] },
    { id: 1, title: "Helpful Links", infos: ["Company", "History","Meet the Team","Employee Handbook","Careers"] },
    { id: 1, title: "Contact Us", infos: ["Company", "History","Meet the Team","Employee Handbook","Careers"]},

  ];

  return (
    <>
      <div className='bg-cyan-950 w-full flex justify-center text-white font-extralight'>
        <div>
          <div className="flex justify-around space-x-12">
            {Data.map((Section) => (
              <div key={Section.id} className="p-4 mt-6">
                <h1 className="text-xl font-bold">{Section.title}</h1>
                <ul className="mt-4 text-white font-extralight leading-9">
                  {Section.infos.map((regret, index) => (
                    <li key={index}>
                      <a href="#">{regret}</a>
                    </li>
                  ))}
                </ul> 
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
