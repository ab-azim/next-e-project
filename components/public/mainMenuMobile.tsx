"use client";

import { Menu, Search, X } from "lucide-react";
import ProductCart from "../productCart";
import { useState } from "react";
import ProductSearch from "../search";

const MainMenuMobile = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="flex justify-end gap-x-5 ">
      <Search
        onClick={() => setActive(true)}
        className="cursor-pointer hover:text-primary"
      />
      <Menu className="cursor-pointer hover:text-primary" />
      <ProductCart />
      {active && (
        <div className="absolute top-0 p-2 left-0 w-full flex justify-center items-center  bg-white h-full px-5">
          <ProductSearch />
          <div className="flex items-center justify-center -ml-7">
            <X
              onClick={() => setActive(false)}
              className="cursor-pointer hover:text-primary"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MainMenuMobile;
