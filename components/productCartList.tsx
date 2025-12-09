import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const ProductCartList = () => {
  return (
    <div className="absolute mt-4 w-66 top-full right-0 p-2 bg-white border">
      <div className=" flex relative pb-3 mb-3 border-b">
        <Image
          src={"https://placehold.co/600x400.png"}
          alt="This is image"
          width={100}
          height={100}
          className=" w-18"
        />
        <div className="px-2 ">
          <Link className=" hover:text-primary" href={"/"}>
            this is product link
          </Link>
          <small className="block">1 X $ 300.00</small>
          <X className="w-4 absolute text-primary top-0 right-0 cursor-pointer" />
        </div>
      </div>
      <div className=" flex relative pb-3 mb-3 border-b">
        <Image
          src={"https://placehold.co/600x400.png"}
          alt="This is image"
          width={100}
          height={100}
          className=" w-18"
        />
        <div className="px-2 ">
          <Link className=" hover:text-primary" href={"/"}>
            this is product link
          </Link>
          <small className="block">1 X $ 300.00</small>
          <X className="w-4 absolute text-primary top-0 right-0 cursor-pointer" />
        </div>
      </div>
      <div>
        <h4 className="text-center font-semibold">Subtotal: $1,717.86</h4>
        <div className="flex pt-2 items-center justify-between">
          <Button asChild>
            <Link href={"/"}>Cart</Link>
          </Button>
          <Button asChild>
            <Link href={"/"}>Checkout</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCartList;
