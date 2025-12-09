import { Search } from "lucide-react";
import React from "react";

const ProductSearch = () => {
  return (
    <div className="px-10 flex-1">
      <div className="relative">
        <input
          className=" border border-primary p-2 w-full"
          type="text"
          placeholder="Search by product name"
        />
        <button className="absolute right-2 top-1/2 -translate-1/2 cursor-pointer hover:text-primary">
          <Search size={19} />
        </button>
      </div>
    </div>
  );
};

export default ProductSearch;
