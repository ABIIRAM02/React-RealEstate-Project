import React from 'react';
import { BrowserRouter , Routes , Route  } from 'react-router-dom';

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import PropertyDetails from './pages/PropertyDetails'
import HouseContextProvider from './components/HouseContextProvider';

function App()
{

  return(
    <HouseContextProvider>
    <BrowserRouter>
    <section className='max-w-[1440px] mx-auto bg-white ' > 
    <Header/>

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Property/:id' element={<PropertyDetails/>} />
    </Routes>

    <Footer/>
    </section>
    </BrowserRouter>
    </HouseContextProvider>

  )

}

export default App;
