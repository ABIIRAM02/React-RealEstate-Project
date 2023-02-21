import React, { useContext } from 'react';

import CountryDropDown from '../components/CountryDropdown'
import PropertyDropdown from '../components/PropertyDropdown'
import PriceRangeDropDown from '../components/PriceRangeDropdown'

import {RiSearch2Line} from 'react-icons/ri'

import {HouseContext} from './HouseContextProvider'

function Search()
{

  let {searchClick} = useContext(HouseContext)

  return(
    <header>

    <main className='bg-white flex flex-col gap-4 lg:gap-x-3 justify-between px-[30px] py-6 max-w-[1170px] mx-auto lg:flex-row lg:shadow-1 relative lg:-top-4 lg:bg-transparent lg:backdrop-blur rounded-lg ' >

      <CountryDropDown/>
      <PropertyDropdown/>
      <PriceRangeDropDown/>

      <button onClick={()=>{searchClick()}} className=' w-full lg:max-w-[160px] bg-violet-600 hover:bg-violet-900 rounded-lg h-14 flex justify-center items-center text-white  ' >
        <RiSearch2Line/>
      </button>
    </main>

    </header>
  )
}

export default Search;
