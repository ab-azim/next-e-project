import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProductSearch from "../search";
import { GitCompareArrows, Heart } from "lucide-react";
import ProductCart from "../productCart";
import MainMenuMobile from "./mainMenuMobile";

const PublicMainMenu = () => {
  return (
    <div className="py-4 relative">
      <div className="body-container">
        <div className="flex items-center">
          <Link href={"/"}>
            <Image
              src={"/logo.svg"}
              alt="My Logo"
              height={70}
              width={160}
              className="w-40 h-auto"
            />
          </Link>

          <div className="flex-1 hidden lg:flex">
            <ProductSearch />
            <div>
              <div className="flex gap-x-10">
                <Link
                  className="flex items-center flex-col relative justify-center"
                  href={"/"}
                >
                  <span className="absolute -top-2 text-white right-0  bg-primary h-5 w-5 rounded-full cursor-pointer flex items-center justify-center text-xs font-bold ">
                    0
                  </span>
                  <GitCompareArrows size={22} />
                  <span className="text-sm">Compare</span>
                </Link>
                <Link
                  className="flex relative items-center flex-col justify-center"
                  href={"/"}
                >
                  <span className="absolute -top-2 text-white right-0  bg-primary h-5 w-5 rounded-full cursor-pointer flex items-center justify-center text-xs font-bold ">
                    0
                  </span>
                  <Heart size={22} />
                  <span className="text-sm">wishlist</span>
                </Link>
                <ProductCart />
              </div>
            </div>
          </div>
          <div className="flex-1 lg:hidden">
            <MainMenuMobile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicMainMenu;
