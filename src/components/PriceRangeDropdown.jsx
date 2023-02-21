import React, { useContext, useState } from 'react';

import { RiWallet3Line , RiArrowDownSLine , RiArrowUpSLine } from 'react-icons/ri';

import {Menu} from '@headlessui/react'

import { HouseContext } from './HouseContextProvider';

function PriceRangeDropdown()
{

  let {price , setPrice} = useContext(HouseContext)

  let [isOpen , setIsOpen] = useState(false)

  let Prices = [
    {
      value:"Price (any)"
    },
    {
      value:"10000 - 50000"
    },
    {
      value:"50000 - 100000"
    },
    {
      value:"100000 - 130000"
    },
    {
      value:"130000 - 160000"
    },
    {
      value:"160000 - 200000"
    },
    {
      value:"250000 - 300000"
    }
  ]

  return(
    <Menu as='div' className='dropdown relative' >
      <Menu.Button className='dropdown-btn w-full text-left'

      onClick={()=>{setIsOpen(!isOpen)}}  >

        <RiWallet3Line className='dropdown-icon-primary  ' />

      <section>
        <div className='font-medium text-[15px] leading-tight' >{price}</div>
        <p>select the Price Range</p>
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
          Prices.map((price , index)=>{
            return(
              <Menu.Item 
              as='li' 
              key={index} 
              className='cursor-pointer hover:to-violet-700 transition '
              onClick={()=>{setPrice(price.value)}}
              >              
                {price.value}
              </Menu.Item>
            )
          })
        }
      </Menu.Items>

    </Menu>
  )
} 

export default PriceRangeDropdown;
