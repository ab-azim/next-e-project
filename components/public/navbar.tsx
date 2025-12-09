"use client";

import { ChevronDown, ChevronRight, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SubTitle from "./subTitle";

const menuData = [1, 2, 3, 4, 5];

const Navbar = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="bg-white border-t">
      <div className="body-container">
        <div className="flex">
          <div className="relative">
            <h4
              onClick={() => setActive(!active)}
              className="p-3 h-12 w-60 bg-primary cursor-pointer flex items-center gap-x-1 text-white"
            >
              <Menu className="w-5 font-semibold text-white" />
              <span className="text-[18px] font-semibold"> Categories</span>
            </h4>
            {active && (
              <div className="absolute top-full left-0 w-full py-2 z-1 bg-white">
                {menuData.map((item, index) => (
                  <div
                    key={item}
                    className={`${
                      menuData.length - 1 == index ? "" : "border-b mb-2 pb-2 "
                    }px-2 flex items-center group cursor-pointer`}
                  >
                    <Image
                      src={
                        "https://geniusdevs.com/codecanyon/omnimart/core/public/storage/images/1629616296pexels-juan-mendez-1536619.jpg"
                      }
                      alt="Category image"
                      width={50}
                      height={50}
                      className="w-12 h-12 object-cover group-hover:rotate-y-180"
                    />
                    <span className="block pl-3 group-hover:text-primary">
                      <Link href={"/"}>Women Clothing</Link>
                    </span>
                    <ChevronRight className="w-5 ml-auto mt-1.5 group-hover:text-primary" />
                    <SubTitle />
                  </div>
                ))}
              </div>
            )}
          </div>
          <div>
            <ul className="flex pl-5">
              <li>
                <Link
                  className="h-12 pr-8 flex items-center hover:text-primary"
                  href={"/"}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="h-12 pr-8 flex items-center hover:text-primary"
                  href={"/"}
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  className="h-12 pr-8 flex items-center hover:text-primary"
                  href={"/"}
                >
                  Campaign
                </Link>
              </li>
              <li>
                <Link
                  className="h-12 pr-8 flex items-center hover:text-primary"
                  href={"/"}
                >
                  Blog
                </Link>
              </li>
              <li className="group relative">
                <Link
                  className="h-12 pr-8 flex items-center hover:text-primary"
                  href={"/"}
                >
                  Pages{" "}
                  <ChevronDown className="mt-1.5 w-5  hover:text-primary" />
                </Link>
                <ul className="bg-white group-hover:opacity-100 group-hover:visible opacity-0 invisible border-t-3 border-primary p-3 shadow-xl absolute top-full left-0 w-42">
                  <li>
                    <Link
                      className="flex items-center hover:text-primary"
                      href={"/"}
                    >
                      <ChevronRight className="w-5" />
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center hover:text-primary"
                      href={"/"}
                    >
                      <ChevronRight className="w-5" />
                      How it Works
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center hover:text-primary"
                      href={"/"}
                    >
                      <ChevronRight className="w-5" />
                      Privacy policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center hover:text-primary"
                      href={"/"}
                    >
                      <ChevronRight className="w-5" />
                      Terms & service
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center hover:text-primary"
                      href={"/"}
                    >
                      <ChevronRight className="w-5" />
                      Return policy
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  className="h-12 pr-8 flex items-center hover:text-primary"
                  href={"/"}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
