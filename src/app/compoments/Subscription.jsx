import React from 'react';

const Subscription = () => {
  return (
    <div className="w-full bg-[#0B1224] text-white py-12 px-4 md:px-10 lg:px-14">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Subscribe to my <span className="text-[#22D3EE]">Newsletters</span>
          </h2>
          <p className="text-sm text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            Phasellus malesuada nisi tellus, non imperdiet nisi tempor at.
          </p>
        </div>

        <form className="flex w-full md:w-auto flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Enter your Email"
            className="rounded-full px-4 py-2 w-full sm:w-72 bg-[#1E293B] text-white focus:outline-none"
          />
          <button
            type="submit"
            className="bg-[#22D3EE] text-black px-6 py-2 rounded-full font-semibold hover:bg-[#06b6d4] transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Subscription;
