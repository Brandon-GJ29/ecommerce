import React from 'react'
import { assets } from '../assets/frontend_assets/assets.js'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      <img src={assets.logo} className='w-36' alt="Logo" />
      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `flex flex-col items-center gap-1 ${isActive ? 'text-blue-600' : ''}`
            }
          >
            <p>Home</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700'/>
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
