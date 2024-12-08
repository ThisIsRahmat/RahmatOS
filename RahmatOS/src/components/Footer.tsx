"use client";
import React from "react";

export const Footer = () => {
  return (
    <div className="p-4 fixed bottom-0 text-left justify-between flex text-xs text-neutral-500  border-neutral-100">
      <div>
        <span className="font-semibold">{new Date().getFullYear()} </span>
        &#8212; All wrongs reserved
      </div>

      <div></div>
    </div>
  );
};
