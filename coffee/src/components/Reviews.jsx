import React from 'react';
import CupI from '../assets/p1.png'

const Reviews = () => {
    const comments = [
        { commentMade: 'Indulge in the sublime experience of Coffee Borcelle where every sip is a journey to flavor paradise. Crafted with precision our rich blends ignite the senses and redefine coffee appreciation', 
          username: '@elonmusk'
        },
        { commentMade: 'Discover a world of taste with Coffee Brocelle. Each cup is a masterpiece, blending aromas and flavors that dance on your palate. Join us in celebrating coffee at its finest.', 
          username: '@JeffBezos'
        },
        { commentMade: 'Welcome to the heart and soul of coffee passion Coffee Borcelle. Our carefully curated beans are an ode to craftsmanship, brewing a story of perfection in every cup.', 
          username: '@MrBeast'
        }
    ]
  return (
    <section className="bg-[#655546] text-white p-8">
      <div className=" mx-auto">
        <div className="flex items-center justify-center mb-4 text-center">
          <h2 className="text-3xl font-bold">Reviews</h2>
          <img src={CupI} alt="Small Image" className="w-12 h-12 ml-2" />
        </div>

        <p className=" text-center text-2xl mb-4 font-light">What other people are saying!</p>

        <div className="grid grid-cols-1 text-center text-[black] lg:mx-10 md:grid-cols-3 md:gap-12 gap-8">
        {comments.map((comment, index) => (
          <div key={index}  className="bg-[#DBBCA1] flex items-center flex-col justify-between p-4 rounded-md shadow-md">
            <p className=" mb-4 font-sans" >{comment.commentMade}</p>
            <p className="text-[#0A424F] font-bold italic" >{comment.username}</p>
          </div>
))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
