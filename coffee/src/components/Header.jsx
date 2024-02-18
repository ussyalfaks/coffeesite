import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
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
<div className=" bg-[#2F1F14]  relative ">
<img src={backgroundImage}  alt="background image"  className={`absolute w-full h-full object-contain max-sm:object-cover object-right ${isMenuOpen? 'hidden' :'' }`} />

<div className={`flex  justify-start max-md:ml-0 lg:ml-28 max-md:justify-between relative ${isMenuOpen? '' :'items-center' }`}>
        <div>
        <img src={Logo}  className='textwhite max-md:max-w-[10rem]  max-w-[19rem] ' alt="" />
        </div>   

        <nav className={` ${isMenuOpen ? 'flex   justify-center items-center -ml-16 h-screen' : ' '}`}>
            <ul className={`flex  text-white font-semibold ${isMenuOpen ? '  max-md:flex-col ' : 'max-md:hidden rounded-md  bg-[#704338]'}`}>
                <li className= {` max-md:my-5 max-md:mx-0 cursor-pointer ${isMenuOpen ? '' : ' bg-white mr-5 px-4  rounded text-[#704338]'}`}>Home</li>
                <li className='mx-5 max-md:my-5 max-md:mx-0 cursor-pointer '>AboutUs</li>
                <li className='mx-5 max-md:my-5 max-md:mx-0 cursor-pointer '>Features</li>
                <li className='mx-5 max-md:my-5 max-md:mx-0 cursor-pointer '>Purchase</li>
                <li className='mx-5 max-md:my-5 max-md:mx-0 cursor-pointer '>ContactUs</li>
            </ul>
        </nav>     
        <div className='md:hidden'>
        <button onClick={toggleMenu}
         className='text-black bg-white max-md:p-2 rounded-lg m-5'>
          <FaBars size={24} />
        </button>
      </div>
    </div>

    <div className={`flex text-white justify-center items-center -top-11 max-md:-left-23 max-md:-top-7 lg:-left-40 flex-col text relative 
    ${isMenuOpen? 'hidden' :'' }`}>
        <h1 className='font-pompiere text-7xl max-md:text-4xl'>Coffee Makes Mood</h1>
        <p className=' max-md:mx-5 font-lobster max-md:text-xl text-2xl'>Indulge in Every Sip: Experience the Richness of Coffee!</p>
    </div>
</div>
    </>
  )
}

export default Header