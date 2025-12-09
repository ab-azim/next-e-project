import { ChevronRight } from "lucide-react";
import Link from "next/link";
import SubTitle2 from "./subTitle2";

const sub = [1, 2, 3, 4, 5];

const SubTitle = () => {
  return (
    <div>
      <div className="absolute group/sub h-full top-0 left-60 w-full bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible">
        {sub.map((item) => (
          <ul key={item}>
            <li>
              <Link
                className="border-b hover:text-primary flex justify-between w-full p-2 "
                href={""}
              >
                Sub title
                <ChevronRight className="w-5 " />
              </Link>
            </li>
          </ul>
        ))}
        <SubTitle2 />
      </div>
    </div>
  );
};

export default SubTitle;
