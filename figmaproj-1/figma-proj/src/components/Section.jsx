import React from 'react';


const Section = () => {
  return (
    <div>
      <main className="section">
        <div className="section-content">
          <div className="lamp">
            <img src="public/images/image 32.png" alt="Lamp" />
          </div>
          <div className="content">
            <p className='para'>Best Furniture For Your Castle....</p>
            <h1>New Furniture Collection Trends in 2023</h1>
            <p className='lorem'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, dolore necessitatibus. Omnis corporis aut perferendis alias nemo a? Deleniti, nemo!</p>
            <div className="section-btn">
              <button className="btn">Shop Now</button>
            </div>
            
          </div>
          <div className="section-img">
            <img src="images/sofa promotional header.png" alt="Sofa" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Section;
