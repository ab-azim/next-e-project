"use client";

import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import ProductCartList from "./productCartList";
import { useState } from "react";
import ActiveOverlay from "./ui/activeOverlay";

const ProductCart = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="flex items-center relative flex-col justify-center">
      <Link
        href={"/"}
        onMouseEnter={() => {
          setActive(true);
        }}
      >
        <span className="absolute -top-2 text-white -right-2  bg-primary h-5 w-5 rounded-full cursor-pointer flex items-center justify-center text-xs font-bold ">
          0
        </span>
        <ShoppingCart size={22} />
        <span className="text-sm hidden lg:block">Cart</span>
      </Link>
      {active && <ProductCartList />}
      <ActiveOverlay onClick={() => setActive(false)} isActive={active} />
    </div>
  );
};

export default ProductCart;
