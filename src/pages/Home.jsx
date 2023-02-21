import React from 'react';

import Banner from '../components/Banner'
import HouseList from '../components/HouseList';

function Home()
{
  return(
    <section className='min-h-[1800px]' >
      <Banner/>
      <HouseList/>
    </section>
  )
}

export default Home;
