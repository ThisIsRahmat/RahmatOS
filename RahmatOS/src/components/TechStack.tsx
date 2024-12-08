import React from "react";
import { Heading } from "./Heading";
import { Paragraph } from "@/components/Paragraph";

export const TechStack = () => {
  const stack = [
    {
      title: "Python",
      src: "/images/logos/python.png",
      text_color: "#7aae0b",
      bg_color: "#f1ffa5",
      className: "h-10 w-20",
    },
    {
      title: "JavaScript",
      src: "/images/logos/python.png",
      bg_color: "#d1ecff",
      text_color: "#5ea1f1",
      className: "h-10 w-20",
    },
    {
      title: "TypeScript",
      src: "/images/logos/python.png",
      bg_color: "#ffe08c",
      text_color: "#f38b29",
      className: "h-10 w-20",
    },
    {
      title: "Tailwind",
      src: "/images/logos/tailwind.png",
      bg_color: "#c3fac5",
      text_color: "#54a0a2",
      className: "h-10 w-24",
    },
    {
      title: "Next.js",
      src: "/images/logos/next.png",
      bg_color: "#f2e5ff",
      text_color: "#22ad81",
      className: "h-10 w-14",
    },
  ];

  return (
    <div>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-4 sm:mt-10 mb-4"
      >
        Tech Stack
      </Heading>
      <div className="flex space-x-2 flex-wrap">
        {stack.map((item) => (
          <span
            key={item.title}
            className="text-sm border rounded-full p-1 shadow-sm"
            style={{
              color: item.text_color,
              borderColor: item.bg_color,
            }}
          >
            {item.title}
          </span>
        ))}
      </div>

      <div className="mt-2">
        <Paragraph>
          I am also a {" "}
          <span className="font-bold">
            {" "}
            Certified Kubernetes Administrator (CKA)
          </span>{" "}
          and{" "}
          <span className="font-bold">
            AWS Certified Solutions Architect{" "}
          </span>{" "}
   
  
        </Paragraph>
      </div>
    </div>
  );
};
