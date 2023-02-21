import React, { useContext } from 'react';
import House from './House'
import { Link } from 'react-router-dom';

import { HouseContext } from './HouseContextProvider';

import {ImSpinner2} from 'react-icons/im'

function HouseList()
{

  let { house , loading } = useContext(HouseContext)

  if(loading)
  {
    return <ImSpinner2 className='animate-spin text-violet-700 mt-20 text-4xl mx-auto' />
  }

  if(house.length < 1 )
  {
    return <h2 className='text-center text-4xl font-semibold text-gray-400 capitalize' > no items matched!! </h2>
  }

  return(
    <section className='container mx-auto mb-20'>
      <div className='grid md:grid-cols-3 md:gap-10 lg:gap-14' >
          {
            house.map((data , index)=>{
              
              return(

              <Link to={`/property/${data.id}`} key={index} >

              <House probs={data} />

              </Link>)

            })
          }
      </div>
    </section>
  )
}

export default HouseList;
