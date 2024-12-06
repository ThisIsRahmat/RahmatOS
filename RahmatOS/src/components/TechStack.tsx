import Image from "next/image";
import React from "react";
import { Heading } from "./Heading";
import { twMerge } from "tailwind-merge";

export const TechStack = () => {
  const stack = [
    {
      title: "Next.js",
      src: "/images/logos/next.png",

      className: "h-10 w-14",
    },
    {
      title: "AWS",
      src: "/images/logos/aws.webp",

      className: "h-10 w-10",
    },

    {
      title: "Python",
      src: "/images/logos/python.png",

      className: "h-10 w-20",
    },


    {
      title: "Tailwind",
      src: "/images/logos/tailwind.png",

      className: "h-10 w-24",
    },
    {
      title: "Vercel",
      src: "/images/logos/vercel.png",

      className: "h-10 w-24",
    },
  ];
  return (
    <div>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg  mt-4 sm:mt-10 mb-4"
      >
        Tech Stack
      </Heading>
      <div className="flex space-x-2 flex-wrap">
        {stack.map((item) => (
     <span  className="text-sm " key={item.title}>
{item.title}
      </span>
        ))}
      </div>
    </div>
  );
};
