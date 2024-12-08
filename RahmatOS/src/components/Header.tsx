import Link from "next/link";
import Image from "next/image";
import { Heading } from "@/components/Heading";
import profileImg from "@/public/images/profile.png";
import { twMerge } from "tailwind-merge";

export function Header() {
  return (
    <div
      className={`max-w-4xl flex justify-between w-full mx-auto py-8 px-4 md:px-10`}
    >
      {/* <Link href="/">
R.J

</Link> */}

      {/* <nav className="flex gap-1 justify-center align-middle pt-8">
         <Link href="/blog">
          blogs
        </Link>
        
        <span>
          {`/`}

        </span>
	        <Link href="/books">
          books
        </Link>
        
        <span>
          {`/`}

        </span>
              <Link href="/daily">
         daily
        </Link>
     
		
  
    
      </nav> */}
    </div>
  );
}
