import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";

const ProductCart = () => {
  return (
    <div>
      <Link className="flex items-center flex-col justify-center" href={"/"}>
        <ShoppingCart size={22} />
        <span className="text-sm">Cart</span>
      </Link>
    </div>
  );
};

export default ProductCart;
