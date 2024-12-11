"use client";
import { timeline } from "@/constants/timeline";
import React, { useState } from "react";
import { Paragraph } from "./Paragraph";
import { motion, AnimatePresence } from "framer-motion";
import { IconCircleCheckFilled } from "@tabler/icons-react";

export const WorkHistory = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div>
      {/* <span className="font-gray-400 text-sm sm:mt-10 mt-6 mb-2"> (click on the job title to see responsibilities)</span> */}
      {timeline.map((item, index) => (
        <div
          className=" space-y-0.5 my-4"
          key={`timeline-${index}`}
        >
          <div
            className="rounded-tr-md  flex flex-row rounded-br-md  py-2 cursor-pointer font-open"
            onClick={() => toggleAccordion(index)}
          >
              <div>
            <Paragraph className="w-40">{item.date}</Paragraph>
            </div>
            <div>
              <Paragraph className="text-xs md:text-base lg:text-base font-semibold">
                {item.title} @{" "}
                <span className="text-xs md:text-lg lg:text-lg text-blue-700">
                  {item.company}
                </span>
              </Paragraph>
              <Paragraph className="text-xs italic md:text-sm lg:text-sm ">
                {item.location}
              </Paragraph>
            </div>
          </div>


          {/* to-do: add job responsibilities */}

          {/* <AnimatePresence>
            {openIndex === index && (
              <motion.div
                key={`details-${index}`}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="p-2 text-gray-700 "
              >
                {item.responsibilities.map((responsibility, idx) => (
                  <Step key={`${index}-resp-${idx}`}>{responsibility}</Step>
                ))}
              </motion.div>
            )}
          </AnimatePresence> */}
        </div>
      ))}
    </motion.div>
  );
};

const Step = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex space-x-1 items-start">
      <IconCircleCheckFilled className="h-3 w-4 mt-1 text-neutral-300" />
      <Paragraph className="text-sm md:text-sm lg:text-sm">
        {children}
      </Paragraph>
    </div>
  );
};
