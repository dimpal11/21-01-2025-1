import React from "react";
import Image from "next/image";
import Rightplay from "@/Image/rightplay.svg";
import Rightplay1 from "@/Image/rightplay1.svg";
import leftplay1 from "@/Image/leftplay1.svg";
import leftplay from "@/Image/leftplay.svg";
function Pagination() {
  return (
    <>
      <div className="w-full border-t border-[#F1E5D1] py-2 max-h-screen">
        <div className=" mx-auto px-4 flex flex-wrap justify-between items-center text-sm text-gray-600">
          {/* Showing Text */}
          <span className="text-[#333333] text-xs font-normal mb-2 sm:mb-0">
            Showing 1 to 9 of 9 Entries
          </span>

          {/* Pagination */}
          <div className="flex items-center flex-wrap gap-2 sm:space-x-2">
            {/* First & Prev Buttons */}
            <button className="px-3 py-1 h-[32px] bg-[#CFA767] hover:bg-gray-300 rounded text-gray-700">
              <Image src={Rightplay} alt="First"></Image>
            </button>
            <button className="px-3 py-1 h-[32px] bg-[#CFA767] hover:bg-gray-300 rounded text-gray-700">
              <Image src={Rightplay1} alt="Previous"></Image>
            </button>

            {/* Page Numbers */}
            <button className="lg:px-3 py-1 hover:text-[#CFA767] rounded text-gray-700">
              1
            </button>
            <button className="lg:px-3 py-1 hover:text-[#CFA767] rounded">
              2
            </button>
            <button className="lg:px-3 py-1 hover:text-[#CFA767] rounded text-gray-700">
              3
            </button>
            <button className="lg:px-3 py-1 hover:text-[#CFA767] rounded text-gray-700">
              4
            </button>
            <button className="lg:px-3 py-1 hover:text-[#CFA767] rounded text-gray-700">
              5
            </button>
            <span className="lg:px-3 py-1 text-gray-700">...</span>
            <button className="lg:px-3 py-1 hover:text-[#CFA767] rounded text-gray-700">
              10
            </button>

            {/* Next & Last Buttons */}
            <button className="px-3 py-1 h-[32px] bg-[#CFA767] hover:bg-gray-300 rounded text-gray-700">
              <Image src={leftplay1} alt="Next"></Image>
            </button>
            <button className="px-3 py-1 h-[32px] bg-[#CFA767] hover:bg-gray-300 rounded text-gray-700">
              <Image src={leftplay} alt="Last"></Image>
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full border-t border-[#F1E5D1] py-4 bg-white">
        <div className=" mx-auto px-4 md:text-left text-center text-sm text-[#333333] uppercase font-normal">
          Copyright @ 2024{" "}
          <span className="font-normal">FIXPAY Solutions.</span>
        </div>
      </footer>
    </>
  );
}

export default Pagination;
