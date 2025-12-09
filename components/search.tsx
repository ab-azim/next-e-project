/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import StarGroup from "./starGroup";
import { useEffect, useState } from "react";

const ProductSearch = () => {
  const [text, setText] = useState("");
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    // if (!text) {
    //   return;
    // }

    const getData = async () => {
      const res = await fetch(
        `https://dummyjson.com/products/search?q=${text}`
      );
      const data = await res.json();
      setSearchData(data.products);
    };

    const timer = setTimeout(() => {
      getData();
    }, 3000);

    return () => clearTimeout(timer);
  }, [text]);

  return (
    <div className="px-10 flex-1">
      <div className="relative">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className=" border border-primary p-2 w-full"
          type="text"
          placeholder="Search by product name"
        />
        <button className="absolute right-1 top-1/2 -translate-1/2 cursor-pointer hover:text-primary">
          <Search size={19} />
        </button>
        {text && (
          <div className="absolute top-full left-0 w-full  border flex flex-col justify-between">
            <div className="p-3 overflow-y-scroll h-78 ">
              {searchData.length == 0 && (
                <div className="flex flex-col text-2xl mt-32 items-center justify-center">
                  No data found
                </div>
              )}
              {searchData.map((item: any) => (
                <div className="flex pb-3 mb-3 border-b" key={item.id}>
                  <div className="w-24">
                    <Image
                      src={item.images[0]}
                      alt="This is image"
                      width={100}
                      height={100}
                      className="h-full w-auto"
                    />
                  </div>
                  <div className="pl-4">
                    <Link
                      className="hover:text-primary text-[17px] font-semibold"
                      href={"/"}
                    >
                      {item.title}
                    </Link>
                    <StarGroup count={item.rating} />
                    <p className="text-[18px] font-semibold text-primary mt-1">
                      $ {item.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="py-2 border-t flex items-center justify-center">
              <Link className="hover:text-primary" href={"/"}>
                View all result
              </Link>
            </div>
          </div>
        )}
      </div>
      {/* {text && (
        <div
          onClick={() => setText("")}
          className="w-full h-screen fixed top-0 left-0 z-1 "
        />
      )} */}
    </div>
  );
};

export default ProductSearch;
