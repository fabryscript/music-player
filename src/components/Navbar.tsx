"use client";

import React from "react";
import { IconContext } from "react-icons";
import { CgMenuLeftAlt, CgSearch } from "react-icons/cg";

function Navbar() {
  return (
    <nav className="grid grid-cols-6 mx-4 mt-12 gap-y-4 text-secondary relative">
      <IconContext.Provider value={{ size: "28" }}>
        <div className="absolute w-[200px] h-[200px] -left-[53px] -top-[178px] blur-[400px] bg-[#fa11ff]" />
        <button className="w-[50px] h-[50px] bg-[#fff]/5 backdrop-blur-[50px] rounded-lg flex justify-center items-center">
          <CgMenuLeftAlt />
        </button>
        <div className="col-start-2 col-span-5 flex flex-row items-center gap-x-3 h-[50px] bg-[#fff]/5 backdrop-blur-[50px] rounded-lg font-light px-5">
          <div className="opacity-50">
            <CgSearch />
          </div>
          <input
            className="bg-transparent focus:outline-none placeholder:opacity-50 placeholder:text-white text-base"
            placeholder="Search"
          />
        </div>
      </IconContext.Provider>
    </nav>
  );
}

export default Navbar;
