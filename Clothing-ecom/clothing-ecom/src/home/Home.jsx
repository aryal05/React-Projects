import React from 'react'
import Banner from "./Banner.jsx"
import HomeCategory from './HomeCategory.jsx';
import CategoryShowCase from './CategoryShowCase.jsx';
import Register from './Register.jsx';
import Location from "./Location.jsx"
import AboutUs from './AboutUs.jsx';
import AppSection from './AppSection.jsx';
import Sponsor from './Sponsor.jsx';

const home = () => {
  return (
    <div>
      <Banner/>
<HomeCategory/>
<CategoryShowCase></CategoryShowCase>
<Register></Register>
<Location></Location>
<AboutUs></AboutUs>
<AppSection></AppSection>
<Sponsor></Sponsor>

    </div>

  )
}

export default home;