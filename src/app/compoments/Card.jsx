// components/Card.jsx
import React from 'react';
import Link from 'next/link';

const Card = ({ id, image, title, date, readTime, description }) => {
  return (
    <Link href={`/image/${id}`}>
      <div className="bg-gray-800 text-white rounded-[20px] overflow-hidden shadow-md w-[369px] h-[518px] hover:shadow-lg transition duration-300 cursor-pointer flex flex-col items-center">
        
        {/* Image Section */}
        <div className="w-[369px] h-[292.81px] rounded-tl-[20px] rounded-tr-[20px] overflow-hidden bg-gray-700">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>

        {/* Content Section */}
        <div className="p-4 flex flex-col items-center">
          
          {/* Title */}
          <h3 className="font-roboto font-bold text-[24px] leading-[100%] text-center w-[209.1px] h-[39.71px]">
            {title}
          </h3>

          {/* Date & Description Section */}
          <div className="w-[341.32px] h-[88.06px] text-center text-sm sm:text-base text-gray-400 mt-[15px]">
            <p className="mb-2">{date} • {readTime}</p>
            <p className="text-gray-300">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
