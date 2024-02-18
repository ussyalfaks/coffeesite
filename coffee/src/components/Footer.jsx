// Footer.js
import React from 'react';
import Logo from '../assets/Logo.png'


const Footer = () => {
  return (
   <>
    <div className="flex justify-center items-start max-md:flex-col  bg-[#291600]">
      <div className=" p-6 rounded-md shadow-md m-4 text-white">
        <h2 className="text-3xl font-semibold mb-2">Contact Us</h2>
        <p className='text-gray-300 mb-3'>Send us a message</p>
        
        <div className="mt-4 flex flex-col">
          <input type="text" id="firstName" name="firstName" className="mt-1 p-2 border rounded-md w-3/4" required placeholder='First name' />
          <input type="email" id="email" name="email" className="mt-1 p-2 border rounded-md w-3/4" required placeholder='Your Email' />
          <textarea id="message" name="message" rows="3" className="mt-1 p-2 border rounded-md w-full" required placeholder='Your message'></textarea>

          <button type="submit" className="mt-4 text-[#291600] text-lg w-1/2 bg-[#DBBCA1] p-2 rounded-md ">Send</button>
        </div>
      </div>
      <div className=" p-6 text-white  m-4">
        <h2 className="text-3xl font-semibold mb-2">Site Map</h2>
        <p className='text-gray-300'>All Our Pages</p>
        <ul className="mt-5 max-md:grid max-md:grid-cols-2 text-lg">
          <li className='max-md:px-3'>- Home</li>
          <li className='max-md:px-3'>- About Us</li>
          <li className='max-md:px-3'>- Feature</li>
          <li className='max-md:px-3'>- Pricing</li>
          <li className='max-md:px-3'>- Contact Us</li>
        </ul>
      </div>
      <div className="text-lg p-6  max-md:mb-5 text-white m-4">
        <img src={Logo} alt="coffeeborcelle" className="max-w-[15rem] max-md:mx-auto " />
        <p> (08) 400 2000</p>
        <p> coffeeborcelle@gmail.com</p>
      </div>
    
    </div>
    <div>
        <p className='text-center bg-[#DBBCA1] py-5'>&#169; 2020 All Rights Reserved Coffee  Borcelle.</p>
      </div>
   </>
  );
};

export default Footer;
