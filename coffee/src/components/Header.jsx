import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { FcHome } from "react-icons/fc";
import Logo from '../assets/Logo.png'
import backgroundImage from '../assets/bgimage.png'
// import backgroundImage from '../assets/fir.jpg'

function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!isMenuOpen);
    };
    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth > 1108) {
            setMenuOpen(false);
          }
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    //   scroll no

    useEffect(() => {
        if (isMenuOpen) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'unset';
        }
    
        return () => {
          document.body.style.overflow = 'unset';
        };
      }, [isMenuOpen]);
  return (
    <>
<div className=" bg-[#2F1F14]  bg-cover bg-center relative">
<img src={backgroundImage} alt=""  className="absolute w-full h-full object-cover" />

<div className={`flex py-5 justify-start max-md:ml-0 lg:ml-20 max-md:justify-between  relative ${isMenuOpen? '' :'items-center' }`}>
        <div>
        <img src={Logo}  className='textwhite max-md:max-w-[10rem]  max-w-[19rem] ' alt="" />
        </div>   

        <nav className={` ${isMenuOpen ? 'flex   justify-center items-center -ml-16 h-screen' : ' '}`}>
            <ul className={`flex  text-white font-semibold ${isMenuOpen ? '  max-md:flex-col' : 'max-md:hidden'}`}>
                <li className='mx-5 max-md:my-5 max-md:mx-0  '>Home</li>
                <li className='mx-5 max-md:my-5 max-md:mx-0 '>AboutUs</li>
                <li className='mx-5 max-md:my-5 max-md:mx-0 '>Features</li>
                <li className='mx-5 max-md:my-5 max-md:mx-0 '>Purchase</li>
                <li className='mx-5 max-md:my-5 max-md:mx-0 '>ContactUs</li>
            </ul>
        </nav>     
        <div className='md:hidden'>
        <button onClick={toggleMenu} className='text-black bg-white max-md:p-2 rounded-lg m-5'>
          <FaBars size={24} />
        </button>
      </div>
    </div>
</div>
    </>
  )
}

export default Header