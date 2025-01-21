import React from "react";
import Image from "next/image";
import dots from "@/Image/DotsThreeVertical.svg";
function Table() {
  return (
    <>
      <div className="overflow-auto md:h-64 relative min-h-screen">
        {/* h-[calc(100%-200px)] */}
        <div className="h-full">
          <table className="table-auto border-collapse border border-t-0 border-[#F1E5D1] w-full text-left ">
            <colgroup>
              <col className="lg:w-[2%]" />
              <col className="lg:w-[8%]" />
              <col className="lg:w-[10%]" />
              <col className="lg:w-[13%]" />
              <col className="lg:w-[15%]" />
              <col className="lg:w-[11%]" />
              <col className="lg:w-[10%]" />
              <col className="lg:w-[10%]" />
              <col className="lg:w-[10%]" />
              <col className="lg:w-[8%]" />
            </colgroup>
            <thead className="bg-[#F9F4EC] sticky top-0 z-10">
              <tr>
                <th className="border-b border-gray-300 px-4 py-2 text-left">
                  <input type="checkbox" className="cursor-pointer" />
                </th>
                <th className="border-b border-[#F1E5D1] px-4 py-2 text-center text-sm whitespace-nowrap">
                  Sr. No
                </th>
                <th className="border-b border-[#F1E5D1] px-4 py-2 text-sm">
                  Date
                </th>
                <th className="border-b border-[#F1E5D1] px-4 py-2 text-sm whitespace-nowrap">
                  Downline Name
                </th>
                <th className="border-b border-[#F1E5D1] px-4 py-2 text-sm whitespace-nowrap">
                  Parent Category
                </th>
                <th className="border-b border-[#F1E5D1] px-4 py-2 text-sm whitespace-nowrap">
                  Distributor ID
                </th>
                <th className="border-b border-[#F1E5D1] px-4 py-2 text-sm">
                  Contact
                </th>
                <th className="border-b border-[#F1E5D1] px-4 py-2 text-center text-sm whitespace-nowrap">
                  OS Balance
                </th>
                <th className="border-b border-[#F1E5D1] px-4 py-2 text-center text-sm">
                  Status
                </th>
                <th className="border border-t border-[#F1E5D1] px-4 py-2 text-center text-sm">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- Row 1 -->   */}
              <tr className="hover:bg-gray-50 ">
                <td className="border-b border-[#F1E5D1] px-4 py-2 text-left">
                  <input type="checkbox" className="cursor-pointer" />
                </td>
                <td className="border-b border-[#F1E5D1] px-4 py-2 text-center text-sm">
                  01
                </td>

                {/* <td className="border-b border-[#F1E5D1] px-4 py-2 text-center">
                01
              </td> */}

                <td className="border-b border-[#F1E5D1] px-4 py-2 text-sm whitespace-nowrap">
                  01-07-2024
                </td>

                {/* <td className="border-b border-[#F1E5D1] px-4 py-2 text-center truncate">
                01-07-2024
              </td> */}
                <td className="border-b border-[#F1E5D1] px-4 py-2 truncate text-sm">
                  Amar H. Shah
                </td>
                <td className="border-b border-[#F1E5D1] px-4 py-2 truncate text-sm">
                  Distributor
                </td>
                <td className="border-b border-[#F1E5D1] px-4 py-2 truncate text-sm">
                  MD25486569
                </td>
                <td className="border-b border-[#F1E5D1] px-4 py-2 truncate first-line:text-sm">
                  8866464917
                </td>
                <td className="border-b border-[#F1E5D1] px-4 py-2 text-center truncate text-sm">
                  200012.00
                </td>
                <td className="border-b border-[#F1E5D1] px-4 py-2 text-center truncate text-sm">
                  <button className="bg-pink-500 text-white px-4 py-1 rounded-sm text-sm">
                    Reversed
                  </button>
                </td>
                <td className="border border-[#F1E5D1] px-4 py-2 text-center truncate">
                  <button className="p-2">
                    <Image src={dots} width={0} height={0} alt="logo"></Image>
                  </button>
                </td>
              </tr>
              {/* <!-- Row 2 --> */}
              <tr className="hover:bg-gray-50">
                <td className="border-b border-[#F1E5D1] px-4 py-2 text-left">
                  <input type="checkbox" className="cursor-pointer" />
                </td>
                <td className="border-b border-[#F1E5D1] px-4 py-2 text-center text-sm">
                  02
                </td>

                {/* <td className="border-b border-[#F1E5D1] px-4 py-2 text-center">
                01
              </td> */}

                <td className="border-b border-[#F1E5D1] px-4 py-2 text-sm whitespace-nowrap">
                  01-07-2024
                </td>

                {/* <td className="border-b border-[#F1E5D1] px-4 py-2 text-center truncate">
                01-07-2024
              </td> */}
                <td className="border-b border-[#F1E5D1] px-4 py-2 truncate text-sm">
                  Amar H. Shah
                </td>
                <td className="border-b border-[#F1E5D1] px-4 py-2 truncate text-sm">
                  Master Distributor
                </td>
                <td className="border-b border-[#F1E5D1] px-4 py-2 truncate text-sm">
                  MD25486569
                </td>
                <td className="border-b border-[#F1E5D1] px-4 py-2 truncate text-sm">
                  8866464917
                </td>
                <td className="border-b border-[#F1E5D1] px-4 py-2 text-center truncate text-sm">
                  200012.00
                </td>
                <td className="border-b border-[#F1E5D1] px-4 py-2 text-center truncate">
                  <button className="bg-pink-500 text-white px-4 py-1 rounded-sm text-sm">
                    Reversed
                  </button>
                </td>
                <td className="border border-[#F1E5D1] px-4 py-2 text-center truncate">
                  <button className="p-2">
                    <Image src={dots} width={0} height={0} alt="logo"></Image>
                  </button>
                </td>
              </tr>

              {/* Row 3 */}
              <tr className="hover:bg-gray-50">
                <td className="border-b border-[#F1E5D1] px-4 py-2 text-left">
                  <input type="checkbox" className="cursor-pointer" />
                </td>
                <td className="border-b border-[#F1E5D1] px-4 py-2 text-center text-sm">
                  03
                </td>

                {/* <td className="border-b border-[#F1E5D1] px-4 py-2 text-center">
                01
              </td> */}

                <td className="border-b border-[#F1E5D1] px-4 py-2 text-sm whitespace-nowrap">
                  01-07-2024
                </td>

                {/* <td className="border-b border-[#F1E5D1] px-4 py-2 text-center truncate">
                01-07-2024
              </td> */}
                <td className="border-b border-[#F1E5D1] px-4 py-2 truncate text-sm">
                  Amar H. Shah
                </td>
                <td className="border-b border-[#F1E5D1] px-4 py-2 truncate text-sm">
                  Master Distributor
                </td>
                <td className="border-b border-[#F1E5D1] px-4 py-2 truncate text-sm">
                  MD25486569
                </td>
                <td className="border-b border-[#F1E5D1] px-4 py-2 truncate text-sm">
                  8866464917
                </td>
                <td className="border-b border-[#F1E5D1] px-4 py-2 text-center truncate text-sm">
                  200012.00
                </td>
                <td className="border-b border-[#F1E5D1] px-4 py-2 text-center truncate text-sm">
                  <button className="bg-pink-500 text-white px-4 py-1 rounded-sm">
                    Reversed
                  </button>
                </td>
                <td className="border border-[#F1E5D1] px-4 py-2 text-center truncate">
                  <button className="p-2">
                    <Image src={dots} width={0} height={0} alt="logo"></Image>
                  </button>
                </td>
              </tr>

              {/* row 4 */}
              <tr className="hover:bg-gray-50">
                <td className="border-b border-[#F1E5D1] px-4 py-2 text-left">
                  <input type="checkbox" className="cursor-pointer" />
                </td>
                <td className="border-b border-[#F1E5D1] px-4 py-2 text-center text-sm">
                  04
                </td>

                {/* <td className="border-b border-[#F1E5D1] px-4 py-2 text-center">
                01
              </td> */}

                <td className="border-b border-[#F1E5D1] px-4 py-2 text-sm whitespace-nowrap">
                  01-07-2024
                </td>

                {/* <td className="border-b border-[#F1E5D1] px-4 py-2 text-center truncate">
                01-07-2024
              </td> */}
                <td className="border-b border-[#F1E5D1] px-4 py-2 truncate text-sm">
                  Amar H. Shah
                </td>
                <td className="border-b border-[#F1E5D1] px-4 py-2 truncate text-sm">
                  Exclusive Distributor
                </td>
                <td className="border-b border-[#F1E5D1] px-4 py-2 truncate text-sm">
                  MD25486569
                </td>
                <td className="border-b border-[#F1E5D1] px-4 py-2 truncate text-sm">
                  8866464917
                </td>
                <td className="border-b border-[#F1E5D1] px-4 py-2 text-center truncate text-sm">
                  200012.00
                </td>
                <td className="border-b border-[#F1E5D1] px-4 py-2 text-center truncate ">
                  <button className="bg-pink-500 text-white px-4 py-1 rounded-sm text-sm">
                    Reversed
                  </button>
                </td>
                <td className="border border-[#F1E5D1] px-4 py-2 text-center truncate">
                  <button className="p-2">
                    <Image src={dots} width={0} height={0} alt="logo"></Image>
                  </button>
                </td>
              </tr>

              {/* row 5 */}
              <tr className="hover:bg-gray-50">
                <td className="border-b border-[#F1E5D1] px-4 py-2 text-left">
                  <input type="checkbox" className="cursor-pointer" />
                </td>
                <td className="border-b border-[#F1E5D1] px-4 py-2 text-center text-sm">
                  05
                </td>

                {/* <td className="border-b border-[#F1E5D1] px-4 py-2 text-center">
                01
              </td> */}

                <td className="border-b border-[#F1E5D1] px-4 py-2 text-sm whitespace-nowrap">
                  01-07-2024
                </td>

                {/* <td className="border-b border-[#F1E5D1] px-4 py-2 text-center truncate">
                01-07-2024
              </td> */}
                <td className="border-b border-[#F1E5D1] px-4 py-2 truncate text-sm">
                  Amar H. Shah
                </td>
                <td className="border-b border-[#F1E5D1] px-4 py-2 truncate text-sm">
                  Direct Distributor
                </td>
                <td className="border-b border-[#F1E5D1] px-4 py-2 truncate text-sm">
                  MD25486569
                </td>
                <td className="border-b border-[#F1E5D1] px-4 py-2 truncate text-sm">
                  8866464917
                </td>
                <td className="border-b border-[#F1E5D1] px-4 py-2 text-center truncate text-sm">
                  200012.00
                </td>
                <td className="border-b border-[#F1E5D1] px-4 py-2 text-center truncate">
                  <button className="bg-pink-500 text-white px-4 py-1 rounded-sm text-sm">
                    Reversed
                  </button>
                </td>
                <td className="border border-[#F1E5D1] px-4 py-2 text-center truncate">
                  <button className="p-2">
                    <Image src={dots} width={0} height={0} alt="logo"></Image>
                  </button>
                </td>
              </tr>
              {/* row 6 */}
              <tr className="hover:bg-gray-50">
                <td className="border-b border-[#F1E5D1] px-4 py-2 text-left">
                  <input type="checkbox" className="cursor-pointer" />
                </td>
                <td className="border-b border-[#F1E5D1] px-4 py-2 text-center text-sm">
                  06
                </td>

                {/* <td className="border-b border-[#F1E5D1] px-4 py-2 text-center">
                01
              </td> */}

                <td className="border-b border-[#F1E5D1] px-4 py-2 text-sm whitespace-nowrap">
                  01-07-2024
                </td>

                {/* <td className="border-b border-[#F1E5D1] px-4 py-2 text-center truncate">
                01-07-2024
              </td> */}
                <td className="border-b border-[#F1E5D1] px-4 py-2 truncate text-sm">
                  Amar H. Shah
                </td>
                <td className="border-b border-[#F1E5D1] px-4 py-2 truncate text-sm">
                  Indirect Distributor
                </td>
                <td className="border-b border-[#F1E5D1] px-4 py-2 truncate text-sm">
                  MD25486569
                </td>
                <td className="border-b border-[#F1E5D1] px-4 py-2 truncate text-sm">
                  8866464917
                </td>
                <td className="border-b border-[#F1E5D1] px-4 py-2 text-center truncate text-sm">
                  200012.00
                </td>
                <td className="border-b border-[#F1E5D1] px-4 py-2 text-center truncate">
                  <button className="bg-pink-500 text-white px-4 py-1 rounded-sm text-sm">
                    Reversed
                  </button>
                </td>
                <td className="border border-[#F1E5D1] px-4 py-2 text-center truncate">
                  <button className="p-2">
                    <Image src={dots} width={0} height={0} alt="logo"></Image>
                  </button>
                </td>
              </tr>
              {/* ROW 7 */}
              <tr className="hover:bg-gray-50">
                <td className="border-b border-[#F1E5D1] px-4 py-2 text-left">
                  <input type="checkbox" className="cursor-pointer" />
                </td>
                <td className="border-b border-[#F1E5D1] px-4 py-2 text-center text-sm">
                  07
                </td>

                {/* <td className="border-b border-[#F1E5D1] px-4 py-2 text-center">
                01
              </td> */}

                <td className="border-b border-[#F1E5D1] px-4 py-2 text-sm whitespace-nowrap">
                  01-07-2024
                </td>

                {/* <td className="border-b border-[#F1E5D1] px-4 py-2 text-center truncate">
                01-07-2024
              </td> */}
                <td className="border-b border-[#F1E5D1] px-4 py-2 truncate text-sm">
                  Amar H. Shah
                </td>
                <td className="border-b border-[#F1E5D1] px-4 py-2 truncate text-sm">
                  Sales Distributor
                </td>
                <td className="border-b border-[#F1E5D1] px-4 py-2 truncate text-sm">
                  MD25486569
                </td>
                <td className="border-b border-[#F1E5D1] px-4 py-2 truncate text-sm">
                  8866464917
                </td>
                <td className="border-b border-[#F1E5D1] px-4 py-2 text-center truncate text-sm">
                  200012.00
                </td>
                <td className="border-b border-[#F1E5D1] px-4 py-2 text-center truncate">
                  <button className="bg-pink-500 text-white px-4 py-1 rounded-sm text-sm">
                    Reversed
                  </button>
                </td>
                <td className="border border-[#F1E5D1] px-4 py-2 text-center truncate">
                  <button className="p-2">
                    <Image src={dots} width={0} height={0} alt="logo"></Image>
                    {/* <img src="dots.svg" alt="dots" className="w-5 h-5" /> */}
                  </button>
                </td>
              </tr>
              {/* Row 8 */}
              <tr className="hover:bg-gray-50">
                <td className="border-b border-[#F1E5D1] px-4 py-2 text-left">
                  <input type="checkbox" className="cursor-pointer" />
                </td>
                <td className="border-b border-[#F1E5D1] px-4 py-2 text-center text-sm">
                  07
                </td>

                {/* <td className="border-b border-[#F1E5D1] px-4 py-2 text-center">
                01
              </td> */}

                <td className="border-b border-[#F1E5D1] px-4 py-2 text-sm whitespace-nowrap">
                  01-07-2024
                </td>

                {/* <td className="border-b border-[#F1E5D1] px-4 py-2 text-center truncate">
                01-07-2024
              </td> */}
                <td className="border-b border-[#F1E5D1] px-4 py-2 truncate text-sm">
                  Amar H. Shah
                </td>
                <td className="border-b border-[#F1E5D1] px-4 py-2 truncate text-sm">
                  Sales Distributor
                </td>
                <td className="border-b border-[#F1E5D1] px-4 py-2 truncate text-sm">
                  MD25486569
                </td>
                <td className="border-b border-[#F1E5D1] px-4 py-2 truncate text-sm">
                  8866464917
                </td>
                <td className="border-b border-[#F1E5D1] px-4 py-2 text-center truncate text-sm">
                  200012.00
                </td>
                <td className="border-b border-[#F1E5D1] px-4 py-2 text-center truncate">
                  <button className="bg-pink-500 text-white px-4 py-1 rounded-sm text-sm">
                    Reversed
                  </button>
                </td>
                <td className="border border-[#F1E5D1] px-4 py-2 text-center truncate">
                  <button className="p-2">
                    <Image src={dots} width={0} height={0} alt="logo"></Image>
                    {/* <img src="dots.svg" alt="dots" className="w-5 h-5" /> */}
                  </button>
                </td>
              </tr>
              {/* Row 9 */}
              <tr className="hover:bg-gray-50">
                <td className="border-b border-[#F1E5D1] px-4 py-2 text-left">
                  <input type="checkbox" className="cursor-pointer" />
                </td>
                <td className="border-b border-[#F1E5D1] px-4 py-2 text-center text-sm">
                  07
                </td>

                {/* <td className="border-b border-[#F1E5D1] px-4 py-2 text-center">
                01
              </td> */}

                <td className="border-b border-[#F1E5D1] px-4 py-2 text-sm whitespace-nowrap">
                  01-07-2024
                </td>

                {/* <td className="border-b border-[#F1E5D1] px-4 py-2 text-center truncate">
                01-07-2024
              </td> */}
                <td className="border-b border-[#F1E5D1] px-4 py-2 truncate text-sm">
                  Amar H. Shah
                </td>
                <td className="border-b border-[#F1E5D1] px-4 py-2 truncate text-sm">
                  Sales Distributor
                </td>
                <td className="border-b border-[#F1E5D1] px-4 py-2 truncate text-sm">
                  MD25486569
                </td>
                <td className="border-b border-[#F1E5D1] px-4 py-2 truncate text-sm">
                  8866464917
                </td>
                <td className="border-b border-[#F1E5D1] px-4 py-2 text-center truncate text-sm">
                  200012.00
                </td>
                <td className="border-b border-[#F1E5D1] px-4 py-2 text-center truncate">
                  <button className="bg-pink-500 text-white px-4 py-1 rounded-sm text-sm">
                    Reversed
                  </button>
                </td>
                <td className="border border-[#F1E5D1] px-4 py-2 text-center truncate">
                  <button className="p-2">
                    <Image src={dots} width={0} height={0} alt="logo"></Image>
                    {/* <img src="dots.svg" alt="dots" className="w-5 h-5" /> */}
                  </button>
                </td>
              </tr>
              {/* row 10 */}
              <tr className="hover:bg-gray-50 ">
                <td className="border-b border-[#F1E5D1] px-4 py-2 text-left">
                  <input type="checkbox" className="cursor-pointer" />
                </td>
                <td className="border-b border-[#F1E5D1] px-4 py-2 text-center text-sm">
                  01
                </td>

                {/* <td className="border-b border-[#F1E5D1] px-4 py-2 text-center">
                01
              </td> */}

                <td className="border-b border-[#F1E5D1] px-4 py-2 text-sm whitespace-nowrap">
                  01-07-2024
                </td>

                {/* <td className="border-b border-[#F1E5D1] px-4 py-2 text-center truncate">
                01-07-2024
              </td> */}
                <td className="border-b border-[#F1E5D1] px-4 py-2 truncate text-sm">
                  Amar H. Shah
                </td>
                <td className="border-b border-[#F1E5D1] px-4 py-2 truncate text-sm">
                  Distributor
                </td>
                <td className="border-b border-[#F1E5D1] px-4 py-2 truncate text-sm">
                  MD25486569
                </td>
                <td className="border-b border-[#F1E5D1] px-4 py-2 truncate first-line:text-sm">
                  8866464917
                </td>
                <td className="border-b border-[#F1E5D1] px-4 py-2 text-center truncate text-sm">
                  200012.00
                </td>
                <td className="border-b border-[#F1E5D1] px-4 py-2 text-center truncate text-sm">
                  <button className="bg-pink-500 text-white px-4 py-1 rounded-sm text-sm">
                    Reversed
                  </button>
                </td>
                <td className="border border-[#F1E5D1] px-4 py-2 text-center truncate">
                  <button className="p-2">
                    <Image src={dots} width={0} height={0} alt="logo"></Image>
                  </button>
                </td>
              </tr>

              {/* row 10 */}
              <tr className="hover:bg-gray-50 ">
                <td className="border-b border-[#F1E5D1] px-4 py-2 text-left">
                  <input type="checkbox" className="cursor-pointer" />
                </td>
                <td className="border-b border-[#F1E5D1] px-4 py-2 text-center text-sm">
                  01
                </td>

                {/* <td className="border-b border-[#F1E5D1] px-4 py-2 text-center">
                01
              </td> */}

                <td className="border-b border-[#F1E5D1] px-4 py-2 text-sm whitespace-nowrap">
                  01-07-2024
                </td>

                {/* <td className="border-b border-[#F1E5D1] px-4 py-2 text-center truncate">
                01-07-2024
              </td> */}
                <td className="border-b border-[#F1E5D1] px-4 py-2 truncate text-sm">
                  Amar H. Shah
                </td>
                <td className="border-b border-[#F1E5D1] px-4 py-2 truncate text-sm">
                  Distributor
                </td>
                <td className="border-b border-[#F1E5D1] px-4 py-2 truncate text-sm">
                  MD25486569
                </td>
                <td className="border-b border-[#F1E5D1] px-4 py-2 truncate first-line:text-sm">
                  8866464917
                </td>
                <td className="border-b border-[#F1E5D1] px-4 py-2 text-center truncate text-sm">
                  200012.00
                </td>
                <td className="border-b border-[#F1E5D1] px-4 py-2 text-center truncate text-sm">
                  <button className="bg-pink-500 text-white px-4 py-1 rounded-sm text-sm">
                    Reversed
                  </button>
                </td>
                <td className="border border-[#F1E5D1] px-4 py-2 text-center truncate">
                  <button className="p-2">
                    <Image src={dots} width={0} height={0} alt="logo"></Image>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Table;
