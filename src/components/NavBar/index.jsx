import React from "react";

const NavBar = () => {
  return (
    <>
      <div className="h-[7rem] w-full flex justify-between  ">
        <div>
          <img src="/mainlogo.png" alt="" className="w-[20%] mt-8 ml-[10%]" />
        </div>

        <div className="flex w-[60%] whitespace-nowrap items-center gap-6 mr-[15%] font-bold text-white text-lg font-raleway ">
          <div className="hover:bg-[#e5383b] hover:py-[3%] px-[5%] rounded-[2rem] transition-all duration-[450ms]">
            HOME
          </div>
          <div className="hover:bg-[#e5383b] hover:py-[3%] px-[5%] hover:rounded-[2rem] transition-all duration-[450ms]">
            ABOUT US
          </div>
          <div className="hover:bg-[#e5383b] hover:py-[3%] px-[5%] hover:rounded-[2rem] transition-all duration-[450ms]">
            CAMPUS LIFE
          </div>
          <div className="bg-[#a4133c] hover:bg-[#e5383b] py-[3%] px-[5%] rounded-[2rem] transition-all duration-[450ms] ">
          MENU
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
