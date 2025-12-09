import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProductSearch from "../search";
import { GitCompareArrows, Heart } from "lucide-react";
import ProductCart from "../productCart";

const PublicMainMenu = () => {
  return (
    <div className="py-4">
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
          <ProductSearch />
          <div>
            <div className="flex gap-x-10">
              <Link
                className="flex items-center flex-col justify-center"
                href={"/"}
              >
                <GitCompareArrows size={22} />
                <span className="text-sm">Compare</span>
              </Link>
              <Link
                className="flex items-center flex-col justify-center"
                href={"/"}
              >
                <Heart size={22} />
                <span className="text-sm">wishlist</span>
              </Link>
              <ProductCart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicMainMenu;
