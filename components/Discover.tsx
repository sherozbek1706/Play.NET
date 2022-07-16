import React from "react";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

import { topics } from "../utils/constants";

const Discover: NextPage = () => {
  const router = useRouter();
  const { topic } = router.query;

  const activeTopicStyle =
    "topiclarni-shunday-active-holati px-3 py-2  flex items-center gap-2 justify-center cursor-pointer ";
  const topicStyle =
    "border-none topiclarni-shunday-turgan-holati  px-3 py-2  flex items-center gap-2 justify-center cursor-pointer xl:text-neutral-800 xl:font-bold";

  return (
    <div className="xl:border-b-2 xl:border-gray-200 pb-6">
      <p className="m-3 mt-4 hidden xl:block side-bar-nom-berish-joy">
        Popular Topics
      </p>
      <div className="flex gap-3 flex-wrap">
        {topics?.map((item) => (
          <Link href={`/?topic=${item.name}`} key={item.name}>
            <div
              className={topic === item.name ? activeTopicStyle : topicStyle}
            >
              <span className="font-bold text-2xl xl:text-md ">
                {item.icon}
              </span>
              <span
                className={`font-medium text-md hidden xl:block capitalize`}
              >
                {item.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Discover;
