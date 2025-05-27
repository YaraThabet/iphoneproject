import React from 'react'
import {appleImg,searchImg,bagImg} from '../../utils';
import {navLists} from '../../constants/index.ts';
const Nav = () => {
  return (
    <header className='w-full py-5 sm:px-10 px-5 flex justify-between items-center'>
        <nav className='flex w-full screen-max-width'>
            <img src={appleImg} alt='Apple' width={14} height={18}/>

            <div className='flex flex-1 justify-center p-2 max-sm:hidden'>
                {navLists.map((nav,index)=>(
                    <div key={index} className='justify-between px-3 cursor-pointer text-gray hover:bg-gray hover:text-black hover:rounded-md transition-all'> 
                        {nav}
                    </div>
                ))}
            </div>
            <div className='flex items-baseline gap-7 max-sm:justify-end  max-sm:flex-1 '>
                <img src={searchImg} alt="search" width={18} height={18}/>
                <img src={bagImg} alt="bag" width={18} height={18}/>
            </div>
        </nav>
    </header>

  )
}

export default Nav;
