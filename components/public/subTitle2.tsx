// import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const sub = [1, 2, 3, 4, 5];

const SubTitle2 = () => {
  return (
    <div>
      <div className="absolute h-full top-0 left-60 w-full bg-white opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible">
        {sub.map((item) => (
          <ul key={item}>
            <li>
              <Link
                className="border-b hover:text-primary flex justify-between w-full p-2 "
                href={""}
              >
                Sub title
                {/* <ChevronRight className="w-5 " /> */}
              </Link>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default SubTitle2;
