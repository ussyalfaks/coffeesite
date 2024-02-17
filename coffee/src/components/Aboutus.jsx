// Aboutus.js

import React from 'react';
import Cup from '../assets/p2.png';

const Aboutus = () => {
  return (
    <section className="bg-[#DBBCA1] p-12 max-md:p-8">
      <div className=" mx-auto flex  max-md:flex-col items-center justify-center">

        {/* First Div - Image */}
        <div className="w-full md:w-1/2 md:pr-10">
          <img
            src={Cup}
            alt="Coffee Image"
            className="object-cover w-96 mx-auto rounded"
          />
        </div>


        {/* Second Div - Title and Descriptions */}
        <div className="w-full md:w-1/2 max-md:mt-4 text-[#2F1F14] md:items-center">
          <div className="font-bold text-3xl max-md:text-2xl  mb-2">Discover Coffee Borcelle</div>
          <div className="mb-4">
            <p className="text-lg">
              Elevating Your Coffee Experience.
            </p>
          </div>
          <div className="mb-8">
            <p className="">
              At Coffee Borcelle, were on a mission to redefine your coffee moments. Our carefully curated selection of premium beans, sourced from the worlds most renowned coffee regions. With expert craftsmanship and a commitment to quality, join us in savoring the art of coffee, one cup at a time.
            </p>
          </div>
          <button className="bg-[#2F1F14] text-white px-4 py-2 rounded">
            Read More
          </button>
        </div>

        
      </div>
    </section>
  );
};

export default Aboutus;
