import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";
import { Container } from "@/components/Container";

import Bookmarks from "@/components/Bookmarks"

import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Bookmarks | Rahmat ",
  description:
    "Rahmat is a developer, writer and speaker. ",
};


export default function BookmarksPage() {
    return (
      <Container>
       
        <Heading className="font-black mb-10">
          {" "}
         Bookmarks
        </Heading>

        <Paragraph>
            Here are key blog posts or websites on a range of different topics that I think are important and love to come back to time and again. 
        </Paragraph>    
  
        <Bookmarks />
      </Container>
    );
  }