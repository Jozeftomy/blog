import React from 'react';

const Newsletters = () => {
  return (
    <section className="h-screen overflow-hidden bg-[#0B1224] text-white flex flex-col justify-center px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-center items-center"> {/* mt-4 instead of mt-auto */}
        <div className="max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Subscribe to my <span className="text-sky-400">Newsletters</span>
          </h2>
          <p className="mt-4 text-gray-300 text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada
            nisi tellus, non imperdiet nisi tempor at.
          </p>
          <ul className="mt-6 space-y-2 text-left text-sm sm:text-base text-gray-300 list-disc list-inside">
            <li>
              Lorem ipsum dolor sit <span className="text-sky-400">amet</span>
            </li>
            <li>Lorem ipsum</li>
            <li>
              Lorem <span className="text-sky-400">ipsum</span> dolor sit
            </li>
          </ul>
          <form className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your Email"
              className="w-full sm:w-auto flex-1 px-4 py-2 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-gradient-to-r from-sky-400 to-blue-500 text-white font-semibold rounded-full shadow-md hover:from-sky-500 hover:to-blue-600"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletters;
