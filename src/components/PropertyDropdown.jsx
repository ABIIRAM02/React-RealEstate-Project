import React, { useContext, useState } from 'react';

import { RiHome5Line , RiArrowDownSLine , RiArrowUpSLine } from 'react-icons/ri';

import {Menu} from '@headlessui/react'

import { HouseContext } from './HouseContextProvider';

function PropertyDropdown()
{

  let {property , setProperty , properties} = useContext(HouseContext)

  let [isOpen , setIsOpen] = useState(false)

  return(
    <Menu as='div' className='dropdown relative' >
      <Menu.Button className='dropdown-btn w-full text-left'

      onClick={()=>{setIsOpen(!isOpen)}}  >

        <RiHome5Line className='dropdown-icon-primary  ' />

      <section>
        <div className='font-medium text-[15px] leading-tight' >{property}</div>
        <p>select your type</p>
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
          properties.map((property , index)=>{
            return(
              <Menu.Item 
              as='li' 
              key={index} 
              className='cursor-pointer hover:to-violet-700 transition '
              onClick={()=>{setProperty(property)}}
              >              
                {property}
              </Menu.Item>
            )
          })
        }
      </Menu.Items>

    </Menu>
  )
} 

export default PropertyDropdown;
