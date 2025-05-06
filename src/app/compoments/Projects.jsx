export default function Projects() {
    return (
      <div className="w-full flex flex-col items-center gap-5 lg:items-start md:px-10 lg:px-14 lg:py-12">
        <div className="w-full min-h-30  rounded-[5px] flex flex-col gap-3 items-center lg:flex-row md:gap-5 bg-[#1E293B66] py-4">
          <img
            src="/images/bulb.png"
            alt="bulb project1"
            className="w-[50px] h-[47px] object-center object-contain md:w-[80px] md:h-[77px] lg:w-[160px] lg:h-[156px]"
          />
          <div className="w-full flex flex-col items-center justify-center  lg:items-start lg:pl-4 gap-2">
            <div className="flex gap-2 items-center">
              <h2 className="md:text-[22px]">Project 1</h2>
              <button className="px-1 lg:py-2 text-[12px] bg-green-800 text-green-400 rounded-[12px]">
                Web Design
              </button>
            </div>
  
            <p className="text-[12px] md:text-[17px] text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              bibendum.
            </p>
            <p className="text-[12px] md:text-[17px] text-gray-400">
              Nunc non posuere consectetur, justo erat semper enim, non hendrerit
              dui odio id enim.
            </p>
          </div>
        </div>

        <div className="w-full min-h-30  rounded-[5px] flex flex-col gap-3 items-center lg:flex-row md:gap-5 bg-[#1E293B66] py-4">
          <img
            src="/images/download.png"
            alt="bulb project1"
            className="w-[50px] h-[47px] object-center object-contain md:w-[80px] md:h-[77px] lg:w-[160px] lg:h-[156px]"
          />
          <div className="w-full flex flex-col items-center justify-center  lg:items-start lg:pl-4 gap-2">
            <div className="flex gap-2 items-center">
              <h2 className="md:text-[22px]">Project 2</h2>
              <button className="px-1 lg:py-2 text-[12px] bg-red-800 text-red-400 rounded-[12px]">
                Next.js
              </button>
            </div>
  
            <p className="text-[12px] md:text-[17px] text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              bibendum.
            </p>
            <p className="text-[12px] md:text-[17px] text-gray-400">
              Nunc non posuere consectetur, justo erat semper enim, non hendrerit
              dui odio id enim.
            </p>
          </div>
        </div>

        <div className="w-full min-h-30  rounded-[5px] flex flex-col gap-3 items-center lg:flex-row md:gap-5 bg-[#1E293B66] py-4">
          <img
            src="/images/cup.png"
            alt="cup project3"
            className="w-[50px] h-[47px] object-center object-contain md:w-[80px] md:h-[77px] lg:w-[160px] lg:h-[156px]"
          />
          <div className="w-full flex flex-col items-center justify-center  lg:items-start lg:pl-4 gap-2">
            <div className="flex gap-2 items-center">
              <h2 className="md:text-[22px]">Project 3</h2>
              <button className="px-1 lg:py-2 text-[12px] bg-violet-800 text-violet-400 rounded-[12px]">
                Web Design
              </button>
            </div>
  
            <p className="text-[12px] md:text-[17px] text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              bibendum.
            </p>
            <p className="text-[12px] md:text-[17px] text-gray-400">
              Nunc non posuere consectetur, justo erat semper enim, non hendrerit
              dui odio id enim.
            </p>
          </div>
        </div>
      </div>
    );
  }