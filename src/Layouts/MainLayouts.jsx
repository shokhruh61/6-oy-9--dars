import React from 'react'
import Moon from '../assets/images/moon.svg'
import { Link, NavLink } from 'react-router-dom'
import ShoppingHeader from '../assets/images/Shop.svg'
function MainLayouts({ children }) {
  return (
    <div>
      <header className=' bg-slate-200'>
        <div className='flex items-center justify-between max-w-[1180px] mx-auto'>
          <div>
            <button className='cursor-pointer py-2 transform active:scale-[0.90] transition-all duration-500 px-4 bg-blue-600 text-4xl text-white rounded-md'>C</button>
          </div>
          <div>
            <Link className='mr-4 focus:bg-black focus:text-white py-2 px-2 rounded-md' to='/'>Home</Link>
            <Link className='mr-4 focus:bg-black focus:text-white hover:bg-[#989898] hover:text-white py-2 px-2 rounded-md' to='/About'>About</Link>
            <Link className='mr-4 focus:bg-black focus:text-white hover:bg-[#989898] hover:text-white py-2 px-2 rounded-md' to='/Products'>Products</Link>
            <Link className='mr-4 focus:bg-black focus:text-white hover:bg-[#989898] hover:text-white py-2 px-2 rounded-md' to='/Cart'>Cart</Link>
          </div>

          <div className='flex items-center gap-3 '>
            <img className='w-7 h-7 cursor-pointer active:-translate' src={Moon} alt="Modes" />
            <img className='w-10 h-10 cursor-pointer' src={ShoppingHeader} alt="shop" />
          </div>
        </div>
      </header>
      {children}
    </div>
  )
}

export default MainLayouts