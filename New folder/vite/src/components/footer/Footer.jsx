import React from 'react'

const Footer = () => {
  const regretsData = [
    { id: 1, title: "Regrets of Anusha...", regrets: ["No:1", "No:2", "No:3", "No:4", "No:5"] },
    { id: 2, title: "Regrets of Anusha..", regrets: ["No:1", "No:2", "No:3", "No:4", "No:5"] },
    { id: 3, title: "Regrets of Anusha..", regrets: ["No:1", "No:2", "No:3", "No:4", "No:5"] }
  ];

  return (
    <>
      <div className='bg-slate-600 w-full flex justify-center'>
        <div>
          <h1 className='font-extralight text-xl text-yellow-400 text-center'>Types of Regrets</h1>
          <div className="flex justify-around space-x-12">
            {regretsData.map((regretSection) => (
              <div key={regretSection.id} className="p-4">
                <h1 className="text-xl font-bold">{regretSection.title}</h1>
                <ul className="mt-4">
                  {regretSection.regrets.map((regret, index) => (
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
