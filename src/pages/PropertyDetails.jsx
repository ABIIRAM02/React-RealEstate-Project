import React from 'react';
import { Link, useParams } from 'react-router-dom';

import { housesData } from '../data';

import {BiBath , BiBed , BiArea} from 'react-icons/bi'

function PropertyDetails()
{

  let {id} = useParams()

  let house = housesData.find((data)=>{
    return data.id === parseInt(id)
  })

  return(
    <header >
        <main className='container mx-auto min-h-[800px] mb-14' >
            <section className='flex flex-col md:flex-row md:items-center justify-between items-start gap-5 sm:gap-0 mb-4' >
              <div>
                <h2 className='text-lg font-semibold' >{house.name}</h2>
                <h2 className='text-base text-gray-500' >{house.address}</h2>
              </div>
              <div className='flex gap-4'  >
                <h2 className='bg-violet-600 px-2 rounded-2xl text-sm text-white' >{house.type}</h2>
                <h2 className=' bg-green-600 px-2 rounded-2xl text-sm text-white' >{house.country}</h2>
              </div>
              <div>
                <h2 className='text-3xl font-semibold text-violet-600' >₹{house.price}</h2>
              </div>
            </section>

            <section className='flex flex-col lg:flex-row items-start gap-8 ' >
              <div className='max-w-[650px] xl:min-w-[800px] '  >
                <div className='mb-14' >
                    <img src={house.imageLg} alt="" />
                </div>
                <div className='flex gap-8 my-4' >
                  <div className='flex gap-3 items-center'  >
                    <BiBath className='text-3xl text-violet-600' />
                    <h2>{house.bathrooms}</h2>
                  </div>
                  <div className='flex gap-3 items-center' >
                    <BiBed className='text-3xl text-violet-600'/ >
                    <h2>{house.bedrooms}</h2>
                  </div>
                  <div className='flex gap-3 items-center' >
                    <BiArea className='text-3xl text-violet-600' />
                    <h2>{house.surface}</h2>
                  </div>

                </div>
                <div className='max-w-[750px] text-gray-600 ' >
                  <h2>{house.description}</h2>
                </div>
              </div>

              <aside className='border w-full border-green-500 rounded-lg bg-white flex-1 px-4 py-6 ' >
              <div className='flex items-center gap-6 mb-5' >
                <div className='w-20 h-20 p-1 rounded-full border border-gray-400' >
                  <img src={house.agent.image} alt="" />
                </div>
                <div>
                  <h2 className='font-bold text-lg text-green-600 ' >{house.agent.name}</h2>
                  <Link to='' className='text-sm text-violet-700' >
                        view Listing
                  </Link>
                </div>
              </div>

              <form action="" className='flex flex-col gap-3' >
                <input className='border border-gray-400 w-full p-3 rounded-md text-sm outline-none focus:border-violet-500 text-gray-500  ' placeholder='name'  type="text" />
                <input className='border border-gray-400 w-full p-3 rounded-md text-sm outline-none  focus:border-violet-500 text-gray-500 ' placeholder='email' type="email" />
                <input className='border border-gray-400 w-full p-3 rounded-md text-sm outline-none  focus:border-violet-500 text-gray-500' placeholder='number' type="tel" />
                <textarea placeholder='message' className='border border-gray-400 w-full p-3 rounded-md text-sm  focus:border-violet-500 text-gray-500 outline-none h-36 resize-none ' defaultValue="Hello, Abii i'm intrested in [modern apartment]"></textarea>

                <div className='flex gap-x-4' >
                  <button className='w-full bg-violet-500 p-1 md:p-3 text-sm text-white rounded hover:bg-violet-700 transition ' >Send Message</button>
                  <button className='w-full border-2 border-green-600 p-1 md:p-3 text-sm text-green-600 rounded transition hover:border-green-700 hover:text-green-600 hover:font-semibold' >Call</button>
                </div>

              </form>

            </aside>

            </section>


        </main>
    </header>
  )
}

export default PropertyDetails;
