import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";
import { Container } from "@/components/Container";

import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Books | Rahmat ",
  description: "Rahmat is a technologists exploring the world of AI ",
};

export default function BookmarksPage() {
  return (
    <Container>
      <Heading className="font-black mb-10"> Books</Heading>

      <Paragraph>I love to read and I am trying to read more books.</Paragraph>
      <Paragraph>
        If you have any book recommendations please don&apos;t hesitate to reach
        out.
      </Paragraph>

      {/* <Projects /> */}
    </Container>
  );
}
