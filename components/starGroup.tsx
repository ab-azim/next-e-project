import React from "react";
import { FaRegStar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

const StarGroup = ({ count }: { count: number }) => {
  //   const makeArray = () => {
  //     const array = new Array(count);
  //     return array.fill(null);
  //   };
  //   console.log(arrayBuffer.fill("hello"));

  return (
    <div>
      <div className="flex gap-x-2 mt-1">
        {[1, 2, 3, 4, 5].map((data) => (
          <div key={data}>
            {data > Math.floor(count) ? (
              <FaRegStar />
            ) : (
              <FaStar className="text-primary" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StarGroup;
