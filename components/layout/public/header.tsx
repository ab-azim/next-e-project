import PublicMainMenu from "@/components/public/mainMenu";
import Navbar from "@/components/public/navbar";
import { MapPin } from "lucide-react";
import Link from "next/link";
import React from "react";

const PublicHeader = () => {
  return (
    <>
      <div className="bg-primary py-2">
        <div className=" body-container">
          <div className="flex flex-col md:flex-row  justify-between items-center">
            <Link
              className="flex items-center text-background gap-1"
              href={"/"}
            >
              <MapPin size={16} className="text-[2px]" />
              Track Order
            </Link>
            <div className="flex gap-x-5 text-background items-center justify-center">
              <a className="border-r pr-3" href="tel:01893331201">
                01893331201
              </a>
              <Link className="font-semibold" href={"/"}>
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
      <PublicMainMenu />
      <Navbar />
    </>
  );
};

export default PublicHeader;
