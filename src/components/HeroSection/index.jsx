import React from "react";
import NavBar from "../NavBar";

const Test = () => {
  return (
    <>
      <div className="relative h-auto w-full">
        <div className="video-container h-auto z--1 ">
          <div className="absolute z-10 top-4">
            <NavBar />
          </div>

          <video autoPlay muted loop className="brightness-50 ">
            <source src="/HomePage1.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="w-[70%] h-[30%] bg-white rounded-md absolute top-[67%] z-30 mx-[14%]">
          <div className="w-full h-[70%] shadow-md mb-2 flex flex-1 text-white">
            <div className="border-r-gray-200 border-r-2 flex-1 rounded-tl-md my-[3%]">
              h
            </div>
            <div className="border-r-gray-200 border-r-2 flex-1 my-[3%]">h</div>
            <div className="border-r-gray-200 border-r-2 flex-1 rounded-tr-md my-[3%]">
              h
            </div>
          </div>
          <div>h</div>
        </div>
        <div className="absolute z-20 top-[72%] h-[8rem]  w-full bg-waves" />

        <div className="w-full h-[50%]  absolute z-10 top-[85%] bg-[#a4133c] flex justify-center">
          <div className=" h-[55%] w-[85%] mt-[10%] flex  ">
            <div className="flex-col w-[70%] ">
              <div className="w-full h-[20%] font-mono text-[1.25rem] text-white mx-[1.7rem] pt-6 flex font-semibold">
                FUTURE ALLIES
                <div className="flex">
                  <img
                    src="/fast-forward.png"
                    alt=""
                    className="w-4 h-4 ml-2 mt-[0.4rem]"
                  />
                </div>
              </div>
              <div className="h-[60%] w-full flex gap-4 mx-[1.7rem] my-[4%]">
                <div className=" border-2 border-[#e5383b] w-[30%] h-[85%] shadow-2xl hover:bg-[#800f2f] transition-colors duration-300">
                  <img
                    src="/right-triangle.png"
                    alt=""
                    className="w-8 translate-x-2 translate-y-[4.7rem] "
                  />
                </div>
                <div className=" border-2 border-[#e5383b] w-[30%] h-[85%] shadow-2xl hover:bg-[#7D0026] transition-colors duration-300">
                  <img
                    src="/right-triangle.png"
                    alt=""
                    className="w-8 translate-x-2 translate-y-[4.7rem] "
                  />
                </div>
                <div className=" border-2 border-[#e5383b] w-[30%] h-[85%] shadow-2xl hover:bg-[#7D0026] transition-colors duration-300">
                  <img
                    src="/right-triangle.png"
                    alt=""
                    className="w-8 translate-x-2 translate-y-[4.7rem] "
                  />
                </div>
              </div>
            </div>
            <div className="bg-redstripes w-[.7rem] h-[80%] rounded-2xl mt-4" />
            <div className=" h-[20%] font-mono text-[1.25rem] text-white mx-[1.7rem] pt-8 flex-col font-semibold">
              CURRENT ALLIES
              <div className="font-sans font-bold tracking-[-0.035em] uppercase text-[1.15rem] mt-4 hover:border-b-2 transition-all">
                Student Council
              </div>
              <div className="font-sans font-bold tracking-[-0.035em] uppercase text-[1.15rem] hover:border-b-2 transition-all ">
                Alumni
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Test;
