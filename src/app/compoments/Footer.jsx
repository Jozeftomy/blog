export default function Footer() {
    return (
      <div className="w-full flex items-center justify-center gap-5 flex-col h-20 border-t px-1 pr-2 md:px-10 lg:px-15 2xl:w-[1386px] lg:flex-row lg:justify-between">
        <p
  className="text-[12px] md:text-[20px] font-medium text-slate-300"
  style={{ fontFamily: 'Roboto', lineHeight: '100%' }}
>
  © Copyright 2022 by Ixartz’s blog. Built with{' '}
  <span className="text-red-500">♥</span> by CreativeDesignsGuru
</p>

<div className="flex items-center gap-2 md:gap-5 w-[193px] h-[44px]">
  <i className="fa-brands fa-github text-xl md:text-2xl cursor-pointer hover:text-gray-400 transition" />
  <i className="fa-brands fa-facebook text-xl md:text-2xl cursor-pointer hover:text-blue-500 transition" />
  <i className="fa-brands fa-linkedin-in text-xl md:text-2xl cursor-pointer hover:text-blue-400 transition" />
  <i className="fa-brands fa-instagram text-xl md:text-2xl cursor-pointer hover:text-pink-500 transition" />
</div>

      </div>
    );
  }