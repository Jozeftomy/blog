export default function Intro() {
    return (
      <div className="w-full flex flex-col items-center gap-5 lg:items-start md:px-10 lg:px-14 lg:py-12">
        
  
        <div className="w-full lg:flex items-center justify-between ">
          <div className="flex flex-col items-center gap-3 lg:items-start  lg:w-[789px] lg:gap-5">
            <h1 className="font-bold text-[20px] lg:text-[47px]  lg:w-full">
              Hi there, I’m <span className="text-[#22D3EE]">Ixartz</span>👋
            </h1>
            <p className="w-fit text-gray-300 text-[12px] sm:w-[550px] lg:text-[20px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              malesuada nisi tellus, non imperdiet nisi tempor at. Lorem ipsum
              dolor sit amet, <span className="text-[#22D3EE]">consectetur</span>{' '}
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et{' '}
              <span className="text-[#22D3EE]">dolore.</span>
            </p>
          </div>
          <div className=" hidden size-[300px] object-center object-contain lg:block">
            <img
              src="/images/avatar.png"
              alt="avatar"
              className="size-[300px] object-center object-contain"
            />
          </div>
        </div>
  
        <div className="flex gap-4 lg:gap-5">
          <i className="fa-brands fa-twitter bg-blue-500 p-[7px] rounded-full lg:p-[10px]"></i>
          <i className="fa-brands fa-linkedin  bg-blue-500 p-[7px] rounded-full lg:p-[10px]"></i>
          <i className="fa-brands fa-facebook  bg-blue-500 p-[7px] rounded-full lg:p-[10px]"></i>
          <i className="fa-brands fa-youtube  bg-red-500 p-[7px] rounded-full lg:p-[10px]"></i>
        </div>
      </div>
    );
  }