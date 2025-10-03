import { StaticImageData } from "next/image";

export type Product = {
  title: string;
  description: string;
  thumbnail: StaticImageData | string; // Removed `?` to make it required
  images?: StaticImageData[] | string[];
  href: string;
  slug?: string;
  stack?: string[];
  content: React.ReactNode | string;
};
