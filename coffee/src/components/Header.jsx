import React from 'react'
import Logo from '../assets/Logo.png'

function Header() {
  return (
    <>
    <div className="flex items-center ">
        <div>
        <img src={Logo} alt="" />
        </div>   

        <nav>
            <ul className='flex'>
                <li className='mx-5'>Home</li>
                <li className='mx-5'>AboutUs</li>
                <li className='mx-5'>Features</li>
                <li className='mx-5'>Purchase</li>
                <li className='mx-5'>ContactUs</li>
            </ul>
        </nav>     
    </div>
    </>
  )
}

export default Header