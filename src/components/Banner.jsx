import React from 'react';

import Image from '../assets/img/house-banner.png'

import Search from '../components/Search'

function Banner()
{
  return(
    <header className='h-full max-h-[640px] mb-8 xl:mb-24' >

    <main className='flex flex-col lg:flex-row justify-center items-center' >

      <div className='lg:ml-8 xl:ml-[135px] flex flex-col flex-1 justify-center text-center lg:text-left px-4 lg:px-0 ' >

          <h2 className=' text-4xl leading-tight font-semibold lg:text-[58px] mb-6 capitalize ' >
            <span className='text-violet-700' >Rent </span>Your desiered House with us.
          </h2>

          <p className='max-w-[480px] mb-8' >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo praesentium cumque fugit ipsam, tempore natus. Quidem rem veritatis doloremque ad
          </p>

      </div>

      <div className='hidden lg:flex flex-1 justify-end items-end' >
        <img src={Image} alt="" />
      </div>

    </main>
    <Search/>
    </header>
  )
}

export default Banner;
