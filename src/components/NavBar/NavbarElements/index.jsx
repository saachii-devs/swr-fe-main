import React from "react";
import { NavBarData } from "@/app/data/NavBarData";

const NavElement = () => {
  return (
    <div className="flex min-h-screen bg-[#31261d]/70">
      <div className="w-[80%] mt-[4%]">
        <div className="flex justify-end h-full">
          <div>
            {NavBarData.map((NavBarelement) => {
              if (NavBarelement.type === "normal") {
                return (
                  <div
                    key={NavBarelement.id}
                    className="m-2 p-2 text-center uppercase whitespace-nowrap bg-[#31261d]/90 text-white font-bold w-[100%]"
                  >
                    {NavBarelement.name}
                  </div>
                );
              } else if (NavBarelement.type === "highlighted") {
                return (
                  <div
                    key={NavBarelement.id}
                    className="m-[1.05rem] bg-white text-black shadow-[-6px_6px_rgba(0,0,255,1)] p-2 text-center uppercase whitespace-nowrap font-bold w-[95%]"
                  >
                    {NavBarelement.name}
                  </div>
                );
              } else {
                return null; // Or handle other cases as needed
              }
            })}
          </div>
        </div>
      </div>
      <div className="w-[20%] bg-[#31261d] text-white">
        <div className="flex-col">
          {NavBarData.map((NavBarelement) => {
            if (NavBarelement.type === "expand") {
              return (
                <div key={NavBarelement.id}>
                  {NavBarelement.name}
                </div>
              );
            }
            return null;
          })}
        </div>
        <div className="flex-col">
        {NavBarData.map((NavBarelement) => {
            if (NavBarelement.type === "non-expand") {
              return (
                <div key={NavBarelement.id}>
                  {/* Add content for "expand" type */}
                  {NavBarelement.name}
                </div>
              );
            }
            return null;
          })}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default NavElement;
