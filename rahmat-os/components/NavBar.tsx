'use client'

// import { Disclosure } from "@headlessui/react";


import Link from 'next/link';



import Profile from "./Profile";

import { AtSign, BookA, Binary, PencilLine } from 'lucide-react';

const imageVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.1 },
};


const navigation : {name: string, href:string}[] = [
 

    // {name:"Blog", href:"/blog"},
    // {name:"Bookmarks", href:"/bookmarks"},
    // {name:"Books", href:"/books"},
    {name:"#100DaysOfGolang", href:"/notes/DaysGo"},
    // {name:"Projects", href:"/projects", icon: <Binary/>}
  ]

export default function Navbar() {

  

  return (
      <div className="mx-auto max-w-screen-xl px-6 dark:text-white">
  <div className="flex flex-wrap sm:justify-between sm:items-center sm:px-4 sm:py-4">
    <div className="flex items-center place-content-center scale-75 sm:scale-105 sm:w-auto w-full h-1/3">
      <Link href="/">
        
        <img
          src="./me_nobg.png"
          alt="rahmat"
          className="block mx-auto sm:h-20 sm:w-full h-1/2 w-1/2 overflow-hidden rounded-full"
        />
      </Link>
    </div>
    <div className="sm:flex sm:space-x-4 items-center w-full sm:w-auto">
      <nav className="flex flex-wrap justify-center space-x-2 uppercase sm:py-4 sm:space-x-4">
        {navigation.map((nav) => (
          <div key={nav.name}>
            <Link
              href={nav.href}
              className="hover:border-b-2 hover:border-[#3f2b90] text-[#3f2b90] font-semibold "
            >
              {nav.name}
            </Link>
          </div>
        ))}
      </nav>
    </div>
  </div>
</div>
  );

}
