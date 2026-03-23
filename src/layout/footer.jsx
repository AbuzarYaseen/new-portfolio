import React from "react";
import { personalData } from "../dataStore.js";

function Footer() {
  return (
    <div className="relative border-t border-[#353951] bg-[#0d1224] text-white">
      <div className="mx-auto px-6 py-4 sm:px-12 lg:max-w-[70rem] lg:py-10 xl:max-w-[76rem] 2xl:max-w-[92rem]">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>
        <div className="flex flex-col items-center justify-between md:flex-row">
          <p className="text-sm">
            &copy; Developer Portfolio by{" "}
            <span className="text-[#16f2b3]">{personalData.name}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
