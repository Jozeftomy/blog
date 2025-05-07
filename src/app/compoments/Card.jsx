'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

const Card = ({ id, image, title, date, readTime, desc }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/blog/${id}`);
  };

  return (
    <div
      className="bg-gray-800 text-white rounded-[20px] overflow-hidden shadow-md w-full max-w-[369px] h-[518px] hover:shadow-lg transition duration-300 cursor-pointer flex flex-col items-center mx-auto"
      onClick={handleClick}
    >
      <div className="w-full h-[292.81px] overflow-hidden bg-gray-700">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4 flex flex-col items-center text-center">
        <h3 className="font-bold text-[24px] break-words">{title}</h3>
        <div className="text-sm text-gray-400 mt-2">
          <p className="mb-2">{date} • {readTime}</p>
          <p className="text-gray-300 break-words">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
