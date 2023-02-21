import React, { useContext, useState } from 'react';

import { RiMapPinLine , RiArrowDownSLine , RiArrowUpSLine } from 'react-icons/ri';

import {Menu} from '@headlessui/react'

import { HouseContext } from './HouseContextProvider';

function CountryDropdown()
{

  let {country , setCountry , countries} = useContext(HouseContext)

  let [isOpen , setIsOpen] = useState(false)

  return(
    <Menu as='div' className='dropdown relative' >
      <Menu.Button className='dropdown-btn w-full text-left'

      onClick={()=>{setIsOpen(!isOpen)}}  >

        <RiMapPinLine className='dropdown-icon-primary  ' />

      <section>
        <div className='font-medium text-[15px] leading-tight' >{country}</div>
        <p>select your places</p>
      </section>
        {
          isOpen ? (
            <RiArrowUpSLine className='dropdown-icon-secondary' />
          ) : (
            <RiArrowDownSLine className='dropdown-icon-secondary' />
          )
        }
      </Menu.Button>
      <Menu.Items className='dropdown-menu' >
        {
          countries.map((country , index)=>{
            return(
              <Menu.Item 
              as='li' 
              key={index} 
              className='cursor-pointer hover:to-violet-700 transition '
              onClick={()=>{setCountry(country)}}
              >              
                {country}
              </Menu.Item>
            )
          })
        }
      </Menu.Items>


    </Menu>
  )
} 

export default CountryDropdown;
