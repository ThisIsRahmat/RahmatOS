import Link from "next/link";
import Image from "next/image";
import { Heading } from "@/components/Heading";
import profileImg from "@/public/images/profile.png";
import { twMerge } from "tailwind-merge";
import { Paragraph } from "@/components/Paragraph";

export function Header() {
  return (
    <div
      className={`max-w-4xl flex justify-between w-full mx-auto py-8 px-4 md:px-10`}
    >
      <Link href="/">
        <div className="font-semibold">Rahmat</div>
      </Link>

      <Paragraph>
        <nav className="flex gap-1">
          <Link className="hover:text-[#312f51] hover:underline" href="/books">
            Books
          </Link>

          <span>{`/`}</span>
           <Link
            className="hover:text-[#312f51] hover:underline"
            href="/bookmarks"
          >
            Bookmarks
          </Link>
          <span>{`/`}</span>
          <Link
            className="hover:text-[#312f51] hover:underline"
            href="/til"
          >
           100 Days of AI+Python
          </Link>

          {/* <span>{`/`}</span>
          <Link className="hover:text-[#312f51] hover:underline" href="/til">
            TIL
          </Link> */}
        </nav>
      </Paragraph>
    </div>
  );
}
