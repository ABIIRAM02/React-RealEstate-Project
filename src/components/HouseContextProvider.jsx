import React, { memo } from 'react';
import { useState , useEffect , createContext } from 'react';

import {housesData} from '../data'

 export const HouseContext = createContext()

function HouseContextProvider({children})
{

  let [house , setHouse] = useState(housesData)

  let [country , setCountry] = useState('location (any)')
  let [countries , setCountries] = useState([])

  let [property , setProperty] = useState('propertype (any)')
  let [properties , setProperties] = useState([])

  let [price , setPrice] = useState('pricerange (any)')

  let [loading , setLoading] = useState(false)


  useEffect(()=>{

    let allCountries = house.map((house)=>{
      return(
        house.country
      )
  })


      let noDuplicate = ['Location (any)' , ...new Set(allCountries)]

      setCountries(noDuplicate)
      

  } , [] )


  useEffect(()=>{

    let allProperties = house.map((house)=>{
      return(
        house.type
      )
  })

      let noDuplicate = ['Propertype (any)' , ...new Set(allProperties)]

      setProperties(noDuplicate)

      // console.log(noDuplicate);

  } , [] )

  let searchClick = ()=>{

    setLoading(true)
    
    //getting price's min and max value from one list and storing into an variable
    let minPrice = parseInt(price.split(' ')[0]) //parseint converts string into number
    
    let maxPrice = parseInt(price.split(' ')[2]) 
    
    let newHouse = housesData.filter((housesData)=>{
      
      let newHousePrice = parseInt(housesData.price)
      
      
      // when every options has been choosen
      if(housesData.country === country 
        && housesData.type === property 
        && newHousePrice <= maxPrice && newHousePrice >= minPrice)
        {
          return(housesData)
        }
        
        //getting (any)
        let defaultOption = (str)=>
        {
          return(
            str.split(' ').includes('(any)') //splits words and checks any is present...{ '' to get single letter , ' ' to get a word , '  'to get 2 words combined together }
          )
        }

        //if everything is default
        if(defaultOption(country) && defaultOption(property) && defaultOption(price))
        {
          return housesData
        }

        //if country is only choosen
        if(!defaultOption(country) && defaultOption(property) && defaultOption(price))
        {
          return housesData.country === country
        }

        //if property type only is choosen
        if(defaultOption(country) && !defaultOption(property) && defaultOption(price))
        {
          return housesData.type === property
        }

        //if price is only choosen
        if(defaultOption(country) && defaultOption(property) && !defaultOption(price))
        {
         return newHousePrice <= maxPrice && newHousePrice >= minPrice 
        }

        if(!defaultOption(country) && !defaultOption(property) && defaultOption(price))
        {
          return housesData.country === country && housesData.type === property
        }
        if(defaultOption(country) && !defaultOption(property) && !defaultOption(price))
        {
          return newHousePrice <= maxPrice && newHousePrice >= minPrice && housesData.type === property
        }
        if(!defaultOption(country) && defaultOption(property) && !defaultOption(price))
        {
          return housesData.country === country && newHousePrice <= maxPrice && newHousePrice >= minPrice
        }

    })
    
    setTimeout(() => {
      
      return newHouse.length < 1 ? setHouse([]) : setHouse(newHouse),
      setLoading(false)

    }, 1000);

  }

  return(
    <HouseContext.Provider 
    
    value={{

          country,
          setCountry,
          countries,
          property,
          setProperty,
          properties,
          price,
          setPrice,
          house,
          loading,
          searchClick

    }} >


    {children}

    </HouseContext.Provider>
  )
}

export default HouseContextProvider;
