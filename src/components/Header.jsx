import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../assets/img/logo.svg'

function Header()
{
  return(
    <header className='py-6 mb-12 border-b' >

      <section className='container mx-auto flex justify-between items-center ' >

      <Link to='/' > 
      <img src={Logo} alt="" />
      </Link>

      <div className='flex items-center gap-2 md:gap-6 ' >
        <Link to='/login' className=' hover:text-violet-900 transition md:text-base text-sm '  >Log-in</Link>
        <Link to='/signup' className='bg-violet-700 hover:bg-violet-900 transition text-white md:text-base text-xs px-3 py-2 rounded' > Sign-up </Link>
      </div>

    </section>

    </header>
  )
}

export default Header;
